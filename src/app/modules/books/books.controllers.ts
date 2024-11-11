import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponst from "../../../shared/sendResponst";
import { BooksService } from "./books.services";


const createBooks = catchAsync(async (req, res)=> {
console.log(req.body)
const result  = await BooksService.createBooksInToDB(req.body)

sendResponst(res, {
    statusCode: StatusCodes.OK,
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
        message: "Book created successfuly",
        data: result,
      });
})

const getBooksById = catchAsync(async(req, res)=> {
const {id }= req.params
    const result  = await BooksService.getBookByIdFromDB(id)

    sendResponst(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Book created successfuly",
        data: result,
      });
})

export const BooksControllers = {
    createBooks,
    getAllBooks,
    getBooksById
}