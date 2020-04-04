import { Router } from 'express';
import Controller from '../controllers/book';
const book: Router = Router();
const controller = new Controller();

// Get all books
book.get('/', controller.findAll);

// Retrieve a Specific Book
book.get('/:bookUuid', controller.findOne);

// Update a Book with Id
book.put('/:bookUuid/update', controller.update);

// Delete a Book with Id
book.delete('/:bookUuid/delete', controller.remove);

// Add a book
book.post('/add', controller.save);

export default book;
