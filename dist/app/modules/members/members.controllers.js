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
exports.MemberController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponst_1 = __importDefault(require("../../../shared/sendResponst"));
const members_services_1 = require("./members.services");
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield members_services_1.MemberService.createMemberFromDB(req.body);
    (0, sendResponst_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "Member created successfully",
        data: result
    });
}));
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield members_services_1.MemberService.getAllMembersFromDB();
    (0, sendResponst_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Members retrieved successfully",
        data: result
    });
}));
const getMemberById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield members_services_1.MemberService.getMemberByIdFromDB(memberId);
    (0, sendResponst_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Member retrieved successfully",
        data: result
    });
}));
const updateMemberById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield members_services_1.MemberService.updateMemberById(memberId, req.body);
    (0, sendResponst_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Member updated successfully",
        data: result
    });
}));
const deleteMemberById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield members_services_1.MemberService.deleteMemberFromDB(memberId);
    (0, sendResponst_1.default)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Member successfully deleted",
        data: result
    });
}));
exports.MemberController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMemberById,
    deleteMemberById
};
