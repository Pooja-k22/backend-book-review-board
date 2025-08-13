const jwt = require('jsonwebtoken')

const jwtmiddleware =async(req,res,next)=>{
    const token = req.headers['authorization'].split(' ')[1]
    try {
        const jwtRestonse = jwt.verify(token,'10')
        console.log(jwtRestonse);
        req.payload = jwtRestonse.userId
        next()
    } catch (error) {
        res.status(401).json('invalid token',error)
    }
}

module.exports = jwtmiddleware