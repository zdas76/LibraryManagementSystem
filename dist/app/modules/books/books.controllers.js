"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponst_1 = __importDefault(require("../../../shared/sendResponst"));
const books_services_1 = require("./books.services");
const createBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_services_1.BooksService.createBooksInToDB(req.body);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "Book created successfuly",
        data: result,
    });
}));
const getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_services_1.BooksService.getAllBooksFromDB();
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Books retrieved successfully",
        data: result,
    });
}));
const getBooksById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield books_services_1.BooksService.getBookByIdFromDB(bookId);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result,
    });
}));
const updateBooksById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield books_services_1.BooksService.updateBooksIntoDB(bookId, req.body);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book updated successfully",
        data: result,
    });
}));
const deleteBooksById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield books_services_1.BooksService.deleteBookByIdFromDB(bookId);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Book successfully deleted",
        data: result,
    });
}));
exports.BooksControllers = {
    createBooks,
    getAllBooks,
    getBooksById,
    updateBooksById,
    deleteBooksById
};
