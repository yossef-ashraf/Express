
```javascript
// app.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const base64Image = require('./utils/base64Image');
const addImageInPublic = require('./utils/addImageInPublic');
const updateImageInPublic = require('./utils/updateImageInPublic');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// مسار مثال لتحويل صورة إلى Base64
app.post('/convert-to-base64', upload.single('image'), (req, res) => {
    const base64Img = base64Image(req.file.path);
    res.json({ base64Image: base64Img });
});

// مسار مثال لإضافة صورة
app.post('/add-image', upload.single('image'), (req, res) => {
    const imagePath = addImageInPublic('Images', 'Img', req.file);
    res.json({ imagePath });
});

// مسار مثال لتحديث صورة
app.post('/update-image', upload.single('image'), (req, res) => {
    const oldImagePath = req.body.oldImagePath;
    const newImagePath = updateImageInPublic('Images', 'Img', req.file, oldImagePath);
    res.json({ newImagePath });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

