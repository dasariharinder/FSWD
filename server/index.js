const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({hi:"I am Harinder Dasari"})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);

