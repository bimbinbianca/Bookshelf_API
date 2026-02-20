import express from 'express';
import {
    savingBook,
    getaBook,
    getaBookById,
    editBookById,
    deleteBookById
} from './controller.js';

const routes = express.Router();

routes.post('/books', savingBook);
routes.get('/books', getaBook);
routes.get('/books/:id', getaBookById);
routes.put('/books/:id', editBookById);
routes.delete('books/:id', deleteBookById);

export default routes;
