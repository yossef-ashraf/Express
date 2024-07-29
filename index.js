require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '127.0.0.1';
const routesUser = require('./routes/user');
const routes = require('./routes/routes');


app.use(express.json());
app.use('/users', routesUser);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
