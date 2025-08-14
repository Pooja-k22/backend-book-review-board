const mongoose = require('mongoose')
// schema
const reviewSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
     bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"books"
    },
     rating:{
        type:Number,
        required:true
    },
     comment:{
        type:String,
        required:true
    },
},{ timestamps: true })

// create model
const reviews = mongoose.model('reviews',reviewSchema)

// export
module.exports=reviews