import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the Book Schema for TypeScript.
 * @param uuid:string
 * @param name:string
 * @param releaseDate:Number
 * @param authorName: string
 */

export interface IBook extends Document {
    uuid: string;
    name: string;
    releaseDate: Number;
    authorName: string;
}

const BookSchema: Schema = new Schema({

    uuid: {
        type: String
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    authorName: {
        type: String
    },
    releaseDate: {
        type: Number
    }
});

const Book: Model<IBook> = model("Book", BookSchema);
export default Book;