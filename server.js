// const { Router } = require('express');
const express = require('express');
const bodyParser= require('body-parser');
const routes = require('./routes');
// const router = require('./components/message/network');

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/message',router)
// app.use('/todo',express.static('public/style.css'))
routes(app);


app.listen(3000,()=>{
    console.log('escuchando desde el puerto 3000');
})

