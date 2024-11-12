import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { differenceInDays } from "date-fns";

const createBorrow = async (payLoad: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({
    data: {
      bookId: payLoad.bookId,
      memberId: payLoad.memberId,
    },
  });

  const { returnDate, ...OthersFields } = result;
  return OthersFields;
};

const getAllOverdueFromDB = async () => {
  
const results = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: new Date(new Date().setDate(new Date().getDate() - 14)), 
      },
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  if (results.length) {
    const resultWithOverdueDays = results.map((borrow) => ({
      borrowId: borrow.borrowId,
      bookTitle: borrow.book.title,
      borrowerName: borrow.member.name,
      overdueDays: differenceInDays(new Date(), new Date(borrow.borrowDate)) - 14,
    }));
    return resultWithOverdueDays;
  }

  return null;
  }


const updateBorrow = async (
  borrowId: string,
  payload: Partial<BorrowRecord>
) => {
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId,
    },
    data: {
      borrowDate: payload.borrowDate,
    },
  });

  return result;
};
export const BorrowService = {
  createBorrow,
  getAllOverdueFromDB,
  updateBorrow,
};
