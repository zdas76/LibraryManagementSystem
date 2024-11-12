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
exports.MemberService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createMemberFromDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const checkMail = yield prisma_1.default.member.findUnique({
        where: {
            email: payLoad.email,
        },
    });
    if (checkMail) {
        throw new Error("This Emain already exists");
    }
    const result = yield prisma_1.default.member.create({
        data: payLoad,
    });
    return result;
});
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findMany();
    return result;
});
const getMemberByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    return result;
});
const updateMemberById = (memberId, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.member.findFirstOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma_1.default.member.update({
        where: {
            memberId,
        },
        data: payLoad,
    });
    return result;
});
const deleteMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.member.findFirstOrThrow({
        where: { memberId },
    });
    yield prisma_1.default.member.delete({
        where: { memberId },
    });
});
exports.MemberService = {
    createMemberFromDB,
    getAllMembersFromDB,
    getMemberByIdFromDB,
    updateMemberById,
    deleteMemberFromDB,
};
