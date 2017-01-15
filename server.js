"use strict"; 
const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => {    
   res.status(200).send('Hello world!');
});
app.listen(process.env.PORT);