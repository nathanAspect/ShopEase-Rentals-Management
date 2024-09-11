const { UseModel: { createRecord, getRecordElement, getRecords, updateRecord, deleteRecord}} = require('../model');

const createFolder = async ( req, res ) => {
    var { title, description } = req.body;
    const {id} = req.user;

    const error = []

    title && (title = title.trim());
    description && (description = description.trim());

    try{
        if(!title || title.length < 3){
        error.push('Title not fully filled!')
        }

        if(!description || description.length < 15){
            error.push('Description not fully filled!')
        }

        if(error.length){
            return res.status(200).json(error)
        }

        const newFolder = await createRecord('folder', { title, description, userId: id});
        return res.status(200).json(newFolder);

    } catch(error){
        return res.status(500).json({ "message": 'Error validating folder creation!'});
    }
}


const getFolder = async ( req, res) => {
    const {id} = req.user;
    const folderId = parseInt(req.params.folderId);

    try{
        const folderResult = await getRecordElement('folder', { id: folderId, userId: id}, 
            {
                id: true,
                title: true,
                description: true
            })

        if(folderResult){
            return res.status(200).json(folderResult);
        }

        return res.status(200).json({ "message": "Folder not found!"});
    } catch( error){
        return res.status(500).json({ "message": 'Error Fetching folder!'});
    }
}


const getFolderShops = async ( req, res) => {
    const {id: userId} = req.user;
    const folderId = parseInt(req.params.folderId);

    try{

        const checkFolderAuthority = await getRecordElement('folder', { id: folderId, userId}, { id: true, userId: true});

        if(!checkFolderAuthority){
            return res.status(200).json({ "message": "Folder not found!"});
        }

        const shopResult = await getRecords('shop', {
            folderId,
            folder: {
                userId
            }
        },{
            id: true,
            folderId: true,
            shopNumber: true,
            clientFullName: true,
            price: true,
            shopType: true,
            description: true,
            dealStarted: true,
            startDate: true,
            nextPayment: true,
            paidMonth: true,
            paidStatus: true,
        })

        return res.status(200).json(shopResult);
    } catch( error){
        return res.status(500).json({ "message": 'Error Fetching shops!'});
    }
}


const getFolders = async ( req, res) => {
    const {id: userId} = req.user;

    try{
        const folderResults = await getRecords( 'folder', { userId}, 
            {
                id: true,
                title: true,
                description: true
            })

        res.status(200).json( {"folders": folderResults});        
    } catch( error){
        return res.status(500).json({ "message": 'Error Fetching folder!'});
    }
}


const updateFolder = async ( req, res) => {
    const { id} = req.user;
    const folderId = parseInt(req.params.folderId);
    const { title, description} = req.body;

    try{
        const updatedFolder = await updateRecord('folder', 
            { id: folderId, userId: id}, 
            { title, description}, 
            { id: true, title: true, description: true});
        return res.status(200).json(updatedFolder);

    } catch( error){
        console.log(error);
        return res.status(403).json({ "message": 'Error updating folder!'});
    }

}


const deleteFolder = async ( req, res) => {
    const {id} = req.user;
    const folderId = parseInt(req.params.folderId);

    try{
        await deleteRecord( 'folder', { id: folderId, userId: id});
        return res.status(200).json( {"message": "Deleted successfully!"});  

    } catch( error){
        return res.status(500).json({ "message": 'Error deleting folder!'});
    }
}


module.exports = {
    createFolder,
    getFolder,
    getFolderShops,
    getFolders,
    updateFolder,
    deleteFolder
}