import { Member } from "@prisma/client"
import prisma from "../../../shared/prisma"
import { StatusCodes } from "http-status-codes"

const createMemberFromDB = async(payLoad:Member)=> {

    await prisma.member.findUniqueOrThrow({
        where: {
            email: payLoad.email
        }
    })

    const result =  await prisma.member.create({
        data: payLoad
    })

    return result
}

const getAllMembersFromDB = async():Promise<Member[]>=> {

const result = await prisma.member.findMany()
    return result
}

const getMemberByIdFromDB = async(memberId:string):Promise<Member | null>=> {

    const result = await prisma.member.findUnique({
        where: {
            memberId
        }
    })
        return result
    }

    const updateMemberById = async (memberId: string, payLoad:Partial<Member>) => {

        await prisma.member.findFirstOrThrow({
            where: {
                memberId
            }
        })

        const result = await prisma.member.update({
            where:{
                memberId
            },
            data: payLoad
        })

        return result
    }
    
const deleteMemberFromDB = async(memberId:string) => {

    await prisma.member.findFirstOrThrow({
        where: { memberId}
    })

    await prisma.member.delete({
        where: { memberId}
    })
}


export const MemberService = {
    createMemberFromDB,
    getAllMembersFromDB,
    getMemberByIdFromDB,
    updateMemberById,
    deleteMemberFromDB
}