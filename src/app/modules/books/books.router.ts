import express from 'express';
import { BooksControllers } from './books.controllers';


const router = express.Router();

router.post('/', BooksControllers.createBooks)

router.get('/:id', BooksControllers.getBooksById)

router.get('/', BooksControllers.getAllBooks)


export const BooksRouter = router;