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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const date_fns_1 = require("date-fns");
const createBorrow = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.create({
        data: {
            bookId: payLoad.bookId,
            memberId: payLoad.memberId,
        },
    });
    const { returnDate } = result, OthersFields = __rest(result, ["returnDate"]);
    return OthersFields;
});
const getAllOverdueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield prisma_1.default.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: new Date(new Date().setDate(new Date().getDate() - 7)),
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
            overdueDays: (0, date_fns_1.differenceInDays)(new Date(), new Date(borrow.borrowDate)) - 7,
        }));
        return resultWithOverdueDays;
    }
    return null;
});
const updateBorrow = (borrowId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.update({
        where: {
            borrowId,
        },
        data: {
            borrowDate: payload.borrowDate,
        },
    });
    return result;
});
exports.BorrowService = {
    createBorrow,
    getAllOverdueFromDB,
    updateBorrow,
};
