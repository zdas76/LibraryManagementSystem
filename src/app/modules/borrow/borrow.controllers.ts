import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponst from "../../../shared/sendResponst";
import { BorrowService } from "./borrow.services";
import { TOverDue } from "./borrow.interface";

const createBorrow = catchAsync(async(req, res)=> {

    const result = await BorrowService.createBorrow(req.body)

    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Book borrowed successfully",
        data: result
    })
})

const getOverDueDays = catchAsync(async(req, res)=> {

    const result:TOverDue[] | any = await BorrowService.getAllOverdueFromDB()

if(!result.length){
sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "No overdue books",
        data: result
    })
}else{
    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Overdue borrow list fetched",
        data: result
    })
}
    
})

export const BorrowController = {
    createBorrow,
    getOverDueDays
}