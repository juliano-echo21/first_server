 const store = require('./mock');
 
 const getMessage = function (user,message){
     return new Promise( (resolve,reject)=>{
            resolve(store.list());
     });
 }

 const addMessage = function(user,message){
    return new Promise( (resolve,reject)=>{
        if(!user || !message){
            console.error('[messageController] hubo un error')
            reject("something went wrong");
            return false
    
        }else{
            const fullMessage = {
                user: user,
                message : message,
                date : new Date()
            }
            // console.log(fullMessage)
            store.add(fullMessage);
            resolve(fullMessage);
        }
     });

 }

 module.exports = {
     getMessage : getMessage,
     addMessage : addMessage

 }