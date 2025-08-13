const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

// connect
mongoose.connect(connectionString).then(()=>{
    console.log('mongodb connected successfully');
    
}).catch((err)=>{
console.log('mongodb connection failed due to',err);

})
