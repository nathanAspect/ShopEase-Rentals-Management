const bcrypt = require('bcrypt')

const encryptString = async input => {
    try{ 
        return await bcrypt.hash(input, 10) 
    } catch(error){ 
        throw new Error('Error encrypting input!') 
    }
}

const encriptionComparision = async (pass, hash) => {
    try{
        return await bcrypt.compare(pass, hash)
    } catch(error){
        throw new Error('Error comparing input!')
    }
}

module.exports = {
    encryptString,
    encriptionComparision
}