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

    const result = await BorrowService.getAllOverdueFromDB();
    

if(!result){
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

const updateBorrow = catchAsync(async(req, res)=> {
    const borrowId = req.params.borrowId
    const result = await BorrowService.updateBorrow(borrowId, req.body)

    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Book borrowed successfully updated",
        data: result
    })
})

export const BorrowController = {
    createBorrow,
    getOverDueDays,
    updateBorrow
}