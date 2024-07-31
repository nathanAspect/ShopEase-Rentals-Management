const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

const authorization = (req, res, next)=>{
    const token = req.cookies.token
    if(token){

        jwt.verify(token, secretKey, (err, decoded)=>{
            if(err){
                return res.status(403).json({"message": "User not authorized!"})
            }

            // res.status(200).json({
            //     "message": "User authorized!",
            //     "user": decoded
            // })

            return next();
        })
    }

    return res.status(403).json({"message": "User not authorized!"})
}

module.exports = authorization