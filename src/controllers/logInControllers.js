const prisma = require('../config/database');
const { encriptionComparision } = require('../utils/encription')

const logInValidityCheck = (req, res)=>{

    var {username, password } = req.body;
    
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

        authentication(req, res)

    } catch(error){
        return res.status(500).json({ "error": 'Error validationg log-in!'})
    }

}

const authentication = async (req, res) => {
    var {username, password } = req.body;
    
    try{
        username && (username = username.trim())
        password && (password = password.trim())

        const hashedPass = await prisma.user.findUnique({
            where: { username: username },
            select: { password: true }
        })
        
        if(!hashedPass){
            return res.json({"message": 'Invalid!'});
        }

        const value = await encriptionComparision(password, hashedPass.password)
        
        if(value){
            return res.json({"message": 'Valid!'});
        } else{
            return res.json({"message": 'Invalid!'});
        }

    } catch(error){
        return res.status(500).json({ "error": 'Error validationg log-in!'})
    }
}

module.exports = {
    logInValidityCheck,
}