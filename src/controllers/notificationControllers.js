const { UseModel: { getRecords}} = require('../model');
const dayjs = require('dayjs');

const getNotification = async ( req, res)=>{
    const { id: userId} = req.user;

    try{
        const passedDateShops = await getRecords('shop', {
            folder:{
                userId
            },
            nextPayment: {
                lt: new Date(),
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

        const comingDateShops = await getRecords('shop', {
            folder:{
                userId
            },
            nextPayment: {
                gte: new Date(),
                lte: dayjs().endOf('month').toDate(),
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
        
        
        

        return res.status(200).json({passedDateShops, comingDateShops});


    } catch( error){
        console.log(error)
        return res.status(500).json({ "message": 'Error fetching notification!'});
    }
}


module.exports = {
    getNotification
}