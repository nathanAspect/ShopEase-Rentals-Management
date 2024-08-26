const prisma = require('../config/database');
// the above import is a goner

const { UseModel: { createRecord, getRecordElement} } = require('../model');
const { encryptString } = require('../utils/encription')

const CreateUser = async (req, res) => {
  var { username, fullname, password, SQ1, SQA1, SQ2, SQA2 } = req.newUser
  try{
    password = await encryptString(password);
    SQA1 = await encryptString(SQA1);
    SQA2 = await encryptString(SQA2);
   
    const user = await createRecord('user', { username, fullname, password, SQ1, SQA1, SQ2, SQA2});

    if(user){
      return res.status(200).json({"message": "success!"});
    }
    
    res.status(200).json({"message": "unsuccess!"});

  } catch(error){
    res.status(200).json({"message": "unsuccess!"});
  }
}




const checkValidSignUp = async (req, res) => {
  var { username, fullname, password, SQ1, SQA1, SQ2, SQA2 } = req.body;
   
   const error = []

   username && (username = username.trim().toLowerCase());
   fullname && (fullname = fullname.trim());
   password && (password = password.trim());
   SQ1 && (SQ1 = SQ1.trim());
   SQA1 && (SQA1 = SQA1.trim());
   SQ2 && (SQ2 = SQ2.trim());
   SQA2 && (SQA2 = SQA2.trim());

   try{
    if(!fullname || fullname.length < 6){
      error.push('Fullname not fully filled!')
    }

    if(!password || password.length < 6){
      error.push('Password not fully filled!')
    }

    if(!SQ1 || SQ1.length < 10 || !SQ2 || SQ2.length < 10){
      error.push('Security question not fully filled!')
    }

    if(!SQA1 || SQA1.length == 0 || !SQA2 || SQA2.length == 0){
      error.push('Security answer not fully filled!')
    }

    if(!username || username.length < 4){
      error.push('Username not fully filled!')
    } else{
      const userExists = await getRecordElement('user', {username});
      
      if(userExists){
        error.push('Username not available!')
      }
    }

    if(error.length){
      return res.status(200).json({message: error})
    }

    req.newUser = { username, fullname, password, SQ1, SQA1, SQ2, SQA2 }

    CreateUser(req, res)

  } catch(error){
    return res.status(500).json({ "message": 'Error validationg sign-up!'})
  }
   
}


const checkUsername = async ( req, res)=>{
  try{
    const username = req.params.username.trim().toLowerCase();

    const userExists = await getRecordElement('user', {username});

    if(!userExists){
      return res.status(200).json({ "message": "available."})
    }

    return res.status(200).json({ "message": "unavailable."})

  }catch(error){
    return res.status(500).json({ "message": 'Error checking username!'})
  }
}

///////////////////// THIS NEED TO BE DELETED ////////////////////////////////

const getAllUsers = async (req, res)=>{
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
    } catch (err) { res.status(500).json({ error: err.message }) }
}




module.exports = {
  checkValidSignUp,
  checkUsername,

  getAllUsers,
};
