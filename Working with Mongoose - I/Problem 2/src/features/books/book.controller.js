import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async(req, res) => {
        try {
            const bookData = req.body;
            const newBook = await this.bookRepository.createBook(bookData);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // filtering of book by id
    getOne = async(req, res) => {
        try {
            const id = req.params.bookId;
            const book = await this.bookRepository.getOne(id);
            res.json(book);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

}