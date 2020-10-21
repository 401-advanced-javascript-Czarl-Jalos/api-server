'use strict';

const express = require('express');

const app = express();

const router = express.Router;

router.length('/', (req,res) => {

  res.send('Searching all user');  
});

app.use('/user', router)
app.listen()

