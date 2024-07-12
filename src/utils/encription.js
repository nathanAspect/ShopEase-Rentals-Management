const bcrypt = require('bcrypt')

const encryptString = async input => {
    try{
        const hash = bcrypt.hash(input, 10);
        return hash;
    } catch(error){
        throw new Error('Error encrypting input!')
    }
}

const encriptionComparision = (pass, hash) => {
    try{
        const value = bcrypt.compare(pass, hash)
        return value
    } catch(error){
        throw new Error('Error comparing input!')
    }
}

module.exports = {
    encryptString,
    encriptionComparision,
}