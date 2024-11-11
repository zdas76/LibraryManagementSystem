import express from 'express';
import { BooksControllers } from './books.controllers';


const router = express.Router();

router.post('/', BooksControllers.createBooks)

router.get('/', BooksControllers.getAllBooks)

router.get('/:bookId', BooksControllers.getBooksById)

router.put('/:bookId', BooksControllers.updateBooksById)

router.delete('/:bookId', BooksControllers.deleteBooksById)


export const BooksRouter = router;