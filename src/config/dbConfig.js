const mongoose = require("mongoose");

const mongoUri = process.env.MONGOURL;
mongoose.connect(mongoUri)
.then(function(){
    console.log("connected to mongoose");
})
.catch(function(error){
    console.log(error.message);
});

const db = mongoose.connection;

module.exports = db;