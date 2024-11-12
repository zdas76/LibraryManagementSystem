
import prisma from "../../../shared/prisma"



const createReturnFromDB = async(borrowId:string)=> {
    
    const result = await prisma.borrowRecord.update({
        where: {
            borrowId
        },
        data: {
            returnDate: new Date(),
        },
        
    })
return result;
}


export const ReturnService = {
    createReturnFromDB
}