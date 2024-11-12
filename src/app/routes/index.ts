import express from "express";
import { BooksRouter } from "../modules/books/books.router";
import { BorrowRouter } from "../modules/borrow/borrow.router";
import { MembersRouter } from "../modules/members/members.router";
import { ReturnRouter } from "../modules/return/return.router";


const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    router: BooksRouter,
  },
  {
    path: "/members",
    router: MembersRouter,
  },
  {
    path: "/borrow",
    router: BorrowRouter,
  },
  {
    path: "/return",
    router: ReturnRouter,
  },
  
  
];

moduleRoutes.forEach(route => router.use(route.path, route.router))

export default router;
