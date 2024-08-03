const { authentication } = require('../utils')

const logInValidityCheck = (req, res)=>{

    var {username, password } = req.body
    
    const error = []

    username && (username = username.trim())
    password && (password = password.trim())

    try{
        if(!username){
            error.push('Username not fully filled!')
        }
        
        if(!password){
        error.push('Password not fully filled!')
        }

        if(error.length){
            return res.status(400).json({error})
        }

        authentication(req, res);

    } catch(error){
        return res.status(500).json({ "message": 'Error validationg log-in!'})
    }

}

module.exports = logInValidityCheck