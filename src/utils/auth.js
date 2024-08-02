const prisma = require('../config/database');
const { encriptionComparision } = require('../utils/encription')
const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY

const authentication = async (req, res) => {
    var {username, password } = req.body;
    
    try{
        username && (username = username.trim().toLowerCase())
        password && (password = password.trim())

        const hashedPass = await prisma.user.findUnique({
            where: { username: username },
            select: { password: true }
        })
        
        if(!hashedPass){
            return res.status(403).json({"message": 'Invalid!'});
        }

        const value = await encriptionComparision(password, hashedPass.password)
        
        if(value){

            const ID = await prisma.user.findUnique({
                where: { username: username },
                select: { id: true }
            })

            const token = jwt.sign({ id: ID.id, username: username }, secretKey, { expiresIn: '10d' })
            
            res.cookie('token', token, { 
                httpOnly: true,
                maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Strict',
            })

            return res.json({"message": "Valid!"})

        } else{
            return res.status(403).json({"message": 'Invalid!'})
        }

    } catch(error){
        return res.status(500).json({ "error": 'Error validationg log-in!'})
    }
}

module.exports = {
    authentication,
}