const prisma = require("../config/database");

const createUser = async data => {
    return await prisma.user.create({ data: data })
}

const getUserElement = async (identifier, targets)=>{
    return await prisma.user.findUnique({
        where: identifier,
        select: targets
    })
}

const deleteUser = async identifier => {
    return await prisma. user.delete({
        where: identifier
    })
}

module.exports = {
    createUser,
    getUserElement,
    deleteUser
}