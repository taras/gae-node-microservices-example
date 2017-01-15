"use strict";

const express = require('express'); 

const app = express(); 

app.get('/admin', (req, res) => {    
   res.status(200).send('Admin Section');
});

app.listen(process.env.PORT);