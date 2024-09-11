const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY

const authorization = (req, res, next)=>{

    const token = req.cookies.token

    if(!token){
        return res.status(200).json({"message": "User not authorized!"})
    }
        
    jwt.verify(token, secretKey, (err, decoded)=>{
        
        if(err){
            return res.status(200).json({"message": "User not authorized!"})
        }

        req.user = decoded;
        return next();
    })
    
}

module.exports = authorization