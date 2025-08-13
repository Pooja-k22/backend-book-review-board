// import dotenv
require('dotenv').config()
// import server
const express = require('express')
// import cors
const cors = require('cors')
// import routes
const route = require('./routes')
// import db connection
require('./db')

// create server
const bookReview= express()

// middleware
bookReview.use(cors())
bookReview.use(express.json())
// routes
bookReview.use(route)

// port set
PORT = 5001 || process.env.PORT
// listen port
bookReview.listen(PORT, ()=>{
    console.log(`server running successfully in port ${PORT}`);
    
})