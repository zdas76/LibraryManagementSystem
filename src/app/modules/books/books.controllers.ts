import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponst from "../../../shared/sendResponst";
import { BooksService } from "./books.services";


const createBooks = catchAsync(async (req, res)=> {

const result  = await BooksService.createBooksInToDB(req.body)

sendResponst(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book created successfuly",
    data: result,
  });
})

const getAllBooks = catchAsync(async(req, res)=> {

    const result  = await BooksService.getAllBooksFromDB()

    sendResponst(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Books retrieved successfully",
        data: result,
      });
})

const getBooksById = catchAsync(async(req, res)=> {
const {bookId }= req.params
    const result  = await BooksService.getBookByIdFromDB(bookId)

    sendResponst(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result,
      });
})


const updateBooksById = catchAsync(async(req, res)=> {
    const {bookId }= req.params
        const result  = await BooksService.updateBooksIntoDB(bookId, req.body)
    
        sendResponst(res, {
            statusCode: StatusCodes.OK,
            success: true,
            message: "Book updated successfully",
            data: result,
          });
    })


const deleteBooksById = catchAsync(async(req, res)=> {
    const {bookId }= req.params
        const result  = await BooksService.deleteBookByIdFromDB(bookId )
    
        sendResponst(res, {
            statusCode: StatusCodes.OK,
            success: true,
            message: "Book successfully deleted",
            data: result,
          });
    })

export const BooksControllers = {
    createBooks,
    getAllBooks,
    getBooksById,
    updateBooksById,
    deleteBooksById
}