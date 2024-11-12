import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponst from "../../../shared/sendResponst";
import { MemberService } from "./members.services";

const createMember = catchAsync(async(req, res)=> {
    const result = await MemberService.createMemberFromDB(req.body)

    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: "Member created successfully",
        data: result
    })
})


const getAllMembers = catchAsync(async(req, res)=> {
    const result = await MemberService.getAllMembersFromDB()

    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Members retrieved successfully",
        data: result
    })

})

const getMemberById =catchAsync(async(req, res)=> {
    const {memberId} = req.params;
    const result = await MemberService.getMemberByIdFromDB(memberId)

    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Member retrieved successfully",
        data: result
    })

})


const updateMemberById =catchAsync(async(req, res)=> {

    const {memberId} = req.params;
    const result = await MemberService.updateMemberById(memberId, req.body)

    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Member updated successfully",
        data: result
    })

})


const deleteMemberById =catchAsync(async(req, res)=> {
    
    const {memberId} = req.params;
    const result = await MemberService.deleteMemberFromDB(memberId)

    sendResponst(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Member successfully deleted",
        data: result
    })

})

export const MemberController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMemberById,
    deleteMemberById
}