const express = require('express')

// import user controller
const userController = require('./controller/userController')
// import book controller
const bookController = require('./controller/bookController')
// import review controller
const reviewController = require('./controller/reviewController')

// jwt middleware
const jwtmiddleware = require('./middleware/jwtmiddleware')

// create instance
const route = new express.Router()

//  user
// register
route.post('/register',userController.registerController)
// login
route.post('/login',userController.loginController)


// book
// add book
route.post('/add-book',jwtmiddleware,bookController.bookAddController)
// get book
route.get('/get-book',bookController.bookgetController)
// get A book
route.get('/book-detail/:id',bookController.bookgetAController)

// review
// add review
route.post('/add-review',jwtmiddleware,reviewController.reviewAddController)
// get review
route.get('/get-review/:id',reviewController.reviewgetController)


module.exports = route