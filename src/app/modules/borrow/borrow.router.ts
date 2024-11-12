import express from 'express';
import { BorrowController } from './borrow.controllers';

const router = express.Router();

router.post('/', BorrowController.createBorrow)

router.get('/overdue', BorrowController.getOverDueDays)


export const BorrowRouter = router;