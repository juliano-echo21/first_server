const express = require('express');
const response = require('../../response');
const controller = require('./controller')
const router = express.Router()


router
    .get('/',(req,res)=>{
        controller.createMessage(req.body.user,req.body.message)
            .then( (data)=>{
                response.success(req,res,data,200);
            })
            .catch( (err) => {
                response.error(req,res,err,500);
            });

        // res.end();
    })
    // .post('/',(req,res)=>{
    //     response.success(req,res,'todo ha salido bien',201,'');
    //     res.end()
    // })
    // .patch('/',(req,res)=>{
        
    //     if(req.query.error == 'ok'){
    //         response.error(req,res,'ops, algo ha salido mal',401,);
    //     }
    //     else{
    //         response.success(req,res,'todo bien desde el patch',201,'');
    //     }
        
    // })

module.exports = router;