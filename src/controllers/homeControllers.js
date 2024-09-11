const { UseModel: { getRecords, getDeepRecords}} = require('../model');


const getHomeDetail = async ( req, res)=>{
    const { id: userId} = req.user;

    try{   
        
        const shopResults = await getRecords('shop', {
            folder: {
            userId: userId, // Match the userId from Folder
            },
        }, {id: true});
        const shopAmount = shopResults.length;

        const folderResults = await getRecords('folder', {userId}, {id: true});
        const folderAmount = folderResults.length;

        const inactiveShopsResults = await getRecords('shop', {
            dealStarted: false,
            folder: {
            userId: userId, // Match the userId from Folder
            },
        }, {id: true});

        const inactiveShopsAmount = inactiveShopsResults.length;

        return res.status(400).json({ "message": { shopAmount, folderAmount, inactiveShopsAmount}});


    } catch( error){
        return res.status(500).json({ "message": 'Error getting home info!'});
    }
}


module.exports = {
    getHomeDetail
}