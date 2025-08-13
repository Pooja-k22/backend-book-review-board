const books = require("../models/Books")

// add book
exports.bookAddController = async(req ,res)=>{
    const {title,author,description,image}= req.body 
    const userId= req.payload

    try {
        const newBook = new books({
            title,author,description,image,userId
        })
        await newBook.save()
        res.status(200).json(newBook)
        
    } catch (error) {
         res.status(500).json(error)
       
    }
}

// get book
exports.bookgetController = async(req ,res)=>{

    try {
        const Book = await books.find()
        res.status(200).json(Book)
        
    } catch (error) {
         res.status(500).json(error)
       
    }
}

// get a book
exports.bookgetAController = async(req ,res)=>{
    const bookId= req.params

    try {
        const Book = await books.findById(bookId).populate(userId)
        res.status(200).json(Book)
        
    } catch (error) {
         res.status(500).json(error)
       
    }
}