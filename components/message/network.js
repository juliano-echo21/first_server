const express = require('express');
const response = require('../../response');
const controller = require('./controller')
const router = express.Router()
//another change


router
    .get('/',(req,res)=>{
        controller.getMessage(req.body.user,req.body.message)
            .then( (data)=>{
                response.success(req,res,data,200);
            })
            .catch( (err) => {
                response.error(req,res,err,500);
            });

        // res.end();
    })
    .post('/',(req,res)=>{
        controller.addMessage(req.body.user,req.body.message)
            .then( (data)=>{
                response.success(req,res,data,200);
            })
            .catch( (err) => {
                response.error(req,res,err,500);
            });

        // res.end()
    })
    .patch('/',(req,res)=>{
        controller.updateMessage(req.body.id,req.body.message)
            .then( (data)=>{
                response.success(req,res,data,200)
            })
            .catch( (error)=>{
                response.error(req,res,error,500);
            })
        
    })

module.exports = router;