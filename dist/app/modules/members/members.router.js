"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersRouter = void 0;
const express_1 = __importDefault(require("express"));
const members_controllers_1 = require("./members.controllers");
const router = express_1.default.Router();
router.post('/', members_controllers_1.MemberController.createMember);
router.get('/', members_controllers_1.MemberController.getAllMembers);
router.get('/:memberId', members_controllers_1.MemberController.getMemberById);
router.put('/:memberId', members_controllers_1.MemberController.updateMemberById);
router.delete('/:memberId', members_controllers_1.MemberController.deleteMemberById);
exports.MembersRouter = router;
