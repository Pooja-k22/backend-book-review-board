const mongoose = require('mongoose')

// schema
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     author:{
        type:String,
        required:true
    }, 
    description:{
        type:String,
        required:true
    },
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }, 
    image:{
        type:String,
        required:true
    },
},{timestamps:true})

// create model
const books = mongoose.model('books',bookSchema)

module.exports=books