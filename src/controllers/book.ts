
import { Request, Response } from 'express';
import BookService from '../services/book.service';
const bookService = new BookService();

export default class BookController {

    public findAll = async (req: Request, res: Response) => {
        try {
            const books = await bookService.findAll();
            if (books != null) {
                res.status(200).send({
                    success: true,
                    data: books
                });
            } else {
                return res.status(404).send({
                    success: false,
                    message: 'Books not found',
                    data: null
                });
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

    public findOne = async (req: Request, res: Response): Promise<any> => {
        try {
            const book = await bookService.findOne(req.params.bookUuid);
            if (!book) {
                return res.status(404).send({
                    success: false,
                    message: 'Book not found',
                    data: null
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: book
                });
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

    public update = async (req: Request, res: Response): Promise<any> => {
        const { authorName, name, releaseDate } = req.body;
        try {
            const bookUpdated = await bookService.update(req.params.bookUuid, { name, authorName, releaseDate })
            if (bookUpdated == null) {
                return res.status(404).send({
                    success: false,
                    message: 'Book not found',
                    data: null
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: bookUpdated
                });
            }

        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

    public save = async (req: Request, res: Response): Promise<any> => {
        try {
            const newBook = await bookService.create(req.body)
            console.log('asdadad', newBook);
            if (newBook) {
                res.status(201).send({
                    success: true,
                    message: 'Book Successfully created',
                    data: newBook
                });
            }

        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.toString(),
                data: null
            });
        }
    }

    public remove = async (req: Request, res: Response): Promise<any> => {
        try {
            const book = await bookService.remove(req.params.bookUuid);
            if (book === null) {
                return res.status(404).send({
                    success: false,
                    message: 'Book not found',
                    data: null
                });
            }
            res.status(204).send();
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    }
}




