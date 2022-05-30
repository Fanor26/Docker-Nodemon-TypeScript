const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.zcdns.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

//const URI =`mongodb+srv://sis719:seminario@cluster0.zcdns.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
   
}).then((db) => console.log('database connection success', db.connection.name))
.catch((error)=>console.log(error))

module.exports= mongoose