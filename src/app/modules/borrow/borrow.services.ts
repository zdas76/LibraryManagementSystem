import { BorrowRecord } from "@prisma/client"
import prisma from "../../../shared/prisma"
import { differenceInDays } from 'date-fns';


const createBorrow = async(payLoad:BorrowRecord)=> {
    
    const result = await prisma.borrowRecord.create({
        
        data: {
            bookId: payLoad.bookId,
            memberId : payLoad.memberId
        },
        select: {
            returnDate: false,
          },
    })
return result;
}

const getAllOverdueFromDB = async()=> {
    
    const results = await prisma.$queryRaw`
  SELECT *
  FROM "borrowRecorts"
  WHERE "returnDate" IS NULL
    AND  NOW() > "borrowDate" + interval '7 days';
`;
 if(results?.length > 0){
    const resultWithOverDueDays = results.map((borrow: { bookId: string; book: { title: string; }; member: { name: string; }; borrowDate: number; }) => ({
        borrowId: borrow.bookId,
        bookTitle: borrow.book.title,
        borrowerName: borrow.member.name,
        overdueDays: differenceInDays(new Date(), new Date(borrow.borrowDate + 7))
    }));
    return resultWithOverDueDays
 }
    
return null;
}

export const BorrowService = {
    createBorrow,
    getAllOverdueFromDB
}