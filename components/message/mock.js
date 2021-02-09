const db = require('mongoose');
const Model = require('./model');
const URI = 'mongodb://db_user_learning:4SScWm99pqhc2kQ@cluster0-shard-00-00.6drdx.mongodb.net:27017,cluster0-shard-00-01.6drdx.mongodb.net:27017,cluster0-shard-00-02.6drdx.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-ur23h8-shard-0&authSource=admin&retryWrites=true&w=majority'
db.Promise = global.Promise;

db.connect(URI,
{
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then( ()=> {
    console.log('conectado con exito')
})
.catch(error =>{
    console.log('[db]',error);
})


const addMessage = function(fullMessage){
    const myMessage = new Model(fullMessage)
    myMessage.save();
}

const showMessage = function(){
    //stop
}



module.exports = {
    add : addMessage,
    list : showMessage
}
