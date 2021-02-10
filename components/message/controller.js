const e = require('express');
const store = require('./mock');
 
const getMessage = function (filter){
    return new Promise( async (resolve,reject)=>{

           const result = await store.getMessage(filter);
           resolve(result);
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

const updateMessage = function(id,newMessage){

    return new Promise( async (resolve,reject) =>{
        if(!id || !newMessage){
            reject('[db error]invalid data');
            return false;
        }
        const result = await store.updateText(id,newMessage)
        resolve(result);

    })
}

const deleteMessage = function(id){
    return new Promise( (resolve,reject)=>{
        if(!id){
            reject('[db error] invalid data');
            return false;
        }
        store.remove(id)
            .then( (data)=>{
                resolve(data)
            })
            .catch( (e)=>{
                reject(e)
            })
    })

}

module.exports = {
    getMessage : getMessage,
    addMessage : addMessage,
    updateMessage : updateMessage,
    deleteMessage : deleteMessage

}