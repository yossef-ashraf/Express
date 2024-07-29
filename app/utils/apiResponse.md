```javascript
// routes/api.js

const express = require('express');
const router = express.Router();
const apiResponse = require('../utils/apiResponse');

// Example route
router.get('/example', (req, res) => {
    // Sample data
    const data = { id: 1, name: 'John Doe' };

    // Use the apiResponse helper
    return apiResponse(res, 200, 'Data retrieved successfully', null, data);
});

// Example route with an error
router.get('/error-example', (req, res) => {
    const errors = [{ message: 'An error occurred' }];

    // Use the apiResponse helper
    return apiResponse(res, 400, 'Error occurred', errors);
});

module.exports = router;
```

Example:

```javascript
// app.js

const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```
