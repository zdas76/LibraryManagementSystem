"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRouter = void 0;
const express_1 = __importDefault(require("express"));
const books_controllers_1 = require("./books.controllers");
const router = express_1.default.Router();
router.post('/', books_controllers_1.BooksControllers.createBooks);
router.get('/', books_controllers_1.BooksControllers.getAllBooks);
router.get('/:bookId', books_controllers_1.BooksControllers.getBooksById);
router.put('/:bookId', books_controllers_1.BooksControllers.updateBooksById);
router.delete('/:bookId', books_controllers_1.BooksControllers.deleteBooksById);
exports.BooksRouter = router;
