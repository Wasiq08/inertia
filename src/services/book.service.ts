import Book from "../models/book";

export default class BookService {

    public findAll = async (): Promise<any> => {
        try {
            const books = await Book.find({});
            return books;
        } catch (error) {
            return error
        }
    }

    public findOne = async (uuid: String): Promise<any> => {
        try {
            const book = await Book.findById(uuid);
            if (!book) {
                return null;
            } else {
                return book
            }
        } catch (error) {
            return error
        }
    }

    public create = async (data: any): Promise<any> => {
        try {
            const { name, authorName, releaseDate } = data;
            let book = new Book();
            book.name = name;
            book.authorName = authorName;
            book.releaseDate = releaseDate;
            return book.save();
        } catch (error) {
            return error
        }

    }

    public remove = async (uuid: any): Promise<any> => {
        try {
            const book = await Book.findByIdAndRemove(uuid);
            return book;
        } catch (error) {
            return error
        }
    }

    public update = async (bookUuid: String, data: any): Promise<any> => {
        const bookUpdated = await Book.findByIdAndUpdate(bookUuid,
            {
                $set:
                    data

            },
            { new: true }
        )
        if (!bookUpdated) {
            return null
        } else {
            return bookUpdated
        }
    }



}