const prisma = require("../config/database");

const createRecord = async (model, data) => {
    try{
        return await prisma[model].create({ data });
    } catch(error){
        throw error;
    }
}

const getRecordElement = async (model, identifier, targets)=>{
    try{
        return await prisma[model].findUnique({
            where: identifier,
            select: targets
        })
    } catch(error){
        throw error;
    }
}

const getRecords = async (model, identifier, targets)=>{
    try{
        return await prisma[model].findMany({
            where: identifier,
            select: targets
        })
    } catch(error){
        throw error;
    }
}

const updateRecord = async ( model, identifier, data, target)=>{
    try{
        return await prisma[model].update({
            where: identifier,
            data: data,
            select: target
        })
    } catch( error){
        throw error;
    }
}

const deleteRecord = async (model, identifier) => {
    try{
        return await prisma[model].delete({
            where: identifier
        })
    } catch(error){
        throw error
    }    
}

module.exports = {
    createRecord,
    getRecordElement,
    getRecords,
    deleteRecord,
    updateRecord
}