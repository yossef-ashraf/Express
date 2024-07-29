const express = require("express");
const router = express.Router();
const { body, query, validationResult } = require('express-validator');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

  router.get('/', (req, res)=>{
    res.send('Hello World!');
  });


module.exports = router;