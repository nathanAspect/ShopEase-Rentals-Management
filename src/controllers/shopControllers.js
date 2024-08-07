const { UseModel: { createRecord, getRecordElement, getRecords, updateRecord, deleteRecord}} = require('../model');

const createShop = async ( req, res)=>{
    const { id: userId} = req.user;

    try{
        const error = []
        var { folderId, shopNumber, clientFullName, price, shopType, description} = req.body;

        shopNumber && (shopNumber = shopNumber.trim());
        clientFullName && (clientFullName = clientFullName.trim());
        shopType && (shopType = shopType.trim());
        description && (description = description.trim());


        if(!folderId || (typeof folderId === 'string')){
            error.push('Invalid folder Id!');
        }

        if( !shopNumber || shopNumber.length < 1){
            error.push('Shop Number not fully filled!');
        }

        if( !clientFullName || clientFullName.length < 6){
            error.push('Fullname not fully filled!');
        }

        if( !price || (typeof price === 'string')){
            error.push('Invalid price!');
        }

        if( !shopType || shopType.length < 2){
            error.push('Shop type not fully filled!');
        }

        if( !description || description.length < 10){
            error.push('Description not fully filled!');
        }

        if( error.length > 0){
            return res.status(400).json({error});
        }

        const checkFolderAuthority = await getRecordElement('folder', { id: folderId, userId}, { id: true, userId: true});

        if(!checkFolderAuthority){
            return res.status(403).json({ "message": "User not authorized!"});
        }

        await createRecord('shop', { folderId, shopNumber, clientFullName, price, shopType, description});

        
        return res.status(200).json({ "message": "Shop created successfully!"});


    } catch( error){
        return res.status(500).json({ "message": 'Error creating shop!'});
    }

}


module.exports = {
    createShop,
}
