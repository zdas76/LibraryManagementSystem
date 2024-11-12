import express from 'express';
import { ReturnController } from './return.controllers';


const router = express.Router();

router.post('/', ReturnController.createReturn)




export const ReturnRouter = router;