const express = require('express');
const response = require('../../response');
const router = express.Router()


router
    .get('/',(req,res)=>{
        response.success(req,res,'de maravilla desde el get',200,'cargar hoy');
        res.end();
    })
    .post('/',(req,res)=>{
        response.success(req,res,'todo ha salido bien',201,'');
        res.end()
    })
    .patch('/',(req,res)=>{
        
        if(req.query.error == 'ok'){
            response.error(req,res,'ops, algo ha salido mal',401,);
        }
        else{
            response.success(req,res,'todo bien desde el patch',201,'');
        }
        
    })

module.exports = router;