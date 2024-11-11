import { Book } from "@prisma/client"
import prisma from "../../../shared/prisma"


const createBooksInToDB = async(PayLoad:Book):Promise<Book> => {
    
    const result = await prisma.book.create({
         data: {
            title: PayLoad.title,
            genre: PayLoad.genre,
            publishedYear:PayLoad.publishedYear,
            totalCopies: PayLoad.totalCopies,
            availableCopies: PayLoad.availableCopies
        }
    })

    return result
 
    }

const getAllBooksFromDB = async():Promise<Book[]>=> {
const result = await prisma.book.findMany();

return result;
}


const getBookByIdFromDB = async(bookId:string):Promise<Book>=> {
    const result = await prisma.book.findFirstOrThrow({
        where: {
            bookId
        }
    })
return result
}

const updateBooksIntoDB = async(bookId: string, payLoad:Partial<Book>) => {

    await prisma.book.findFirstOrThrow({
        where: {
            bookId
        }
    })

    const result = await prisma.book.update({
        where: {
            bookId
        }, 
        data:payLoad
    })

    return result
}


const deleteBookByIdFromDB = async(bookId:string)=> {

    await prisma.book.findFirstOrThrow({
        where: {
            bookId
        }
    })

     await prisma.book.delete({
        where: {
            bookId
        }
    })
}

export const BooksService = {
    createBooksInToDB,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateBooksIntoDB,
    deleteBookByIdFromDB
}