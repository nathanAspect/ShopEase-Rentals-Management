const {encription: {encriptionComparision}} = require('../utils');
const {UserModel: {getUserElement, deleteUser} } = require('../model')

const GetUser = async ( req, res ) => {
    const user = req.user;
    const { id } = user;

    const userData = await getUserElement( {id}, {
        username: true,
        fullname: true,
        SQ1: true,
        SQ2: true})

    if(userData){
        return res.status(200).json(userData);
    }
    
    return res.status(403).json({ "message": "User not found!" })
}



const UpdateUser = () => {
    //------------------------------------ Here creating Folder
}



const DeleteUser = async ( req, res ) => {
    const { id } = req.user;
    const { password } = req.body;

    const userPassword = await getUserElement({id}, {password: true});

    try {
        const result = await encriptionComparision(password, userPassword.password);

        if(result){
            const deletedUser = await deleteUser({id});
            return res.status(200).json({"message": "User deleted successfully!"})
        } else{
            return res.status(403).json({"message": "Incorrect password!"})
        }

    } catch(error){
        return res.status(500).json(error)
    }


}


module.exports = {
    GetUser,
    UpdateUser,
    DeleteUser
}
