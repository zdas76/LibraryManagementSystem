import prisma from "../../../shared/prisma"


const createBooksInToDB = async(PayLoad:any) => {
    
    const result = await prisma

    return result
 
    }

const getAllBooksFromDB = async()=> {

}

const getBookByIdFromDB = async(id:string)=> {
    console.log(id)

}

export const BooksService = {
    createBooksInToDB,
    getAllBooksFromDB,
    getBookByIdFromDB
}