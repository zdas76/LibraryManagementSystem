"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_router_1 = require("../modules/books/books.router");
const borrow_router_1 = require("../modules/borrow/borrow.router");
const members_router_1 = require("../modules/members/members.router");
const return_router_1 = require("../modules/return/return.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/books",
        router: books_router_1.BooksRouter,
    },
    {
        path: "/members",
        router: members_router_1.MembersRouter,
    },
    {
        path: "/borrow",
        router: borrow_router_1.BorrowRouter,
    },
    {
        path: "/return",
        router: return_router_1.ReturnRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.router));
exports.default = router;
