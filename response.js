exports.success = (req,res,message,status,header)=>{
    res.header({
        login : header
    })
    res.status(status)
        .send({
        error : "",
        body : message,
    });
};

exports.error = (req,res,message,status)=>{
    res.status(status)
        .send({
        error : message,
        body : ""
    });
};