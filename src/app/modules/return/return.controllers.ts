import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponst from "../../../shared/sendResponst";
import { ReturnService } from "./return.services";

const createReturn = catchAsync(async(req, res)=> {

    const result = await ReturnService.createReturnFromDB(req.body.borrowId)

    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Book returned successfully",
        
    })
})



export const ReturnController = {
    createReturn,
}