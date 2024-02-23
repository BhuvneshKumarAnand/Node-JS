// Please don't change the pre-written code
// make the necessary imports for creating book schema named 'bookSchema'
import mongoose from 'mongoose';


// Start writing your code here
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    genre: { type: String, enum: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Other'], required: true },
    copies: { type: Number, required: true, min: 1 },
    availableCopies: { type: Number, required: true, min: 0 }
});
// const Book = mongoose.model('Book', bookSchema);

export default bookSchema;