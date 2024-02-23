import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'

const Book = mongoose.model('Book', bookSchema);


export default class BookRepository {


    // -----Change code in below functions only-----

    //book creation
    async createBook(bookData) {
        try {
            const newBook = await Book.create(bookData);
            return newBook;
        } catch (error) {
            throw new Error("Error creating book: " + error.message);
        }
    }

    //filtering the book by id
    async getOne(id) {
        try {
            const book = await Book.findById(id);
            if (!book) {
                throw new Error("Book not found");
            }
            return book;
        } catch (error) {
            throw new Error("Error retrieving book: " + error.message);
        }
    }
}