const {Author, Book} = require("../model/model");

const bookController = {
    //ADD Book
    
    addABook: async (req, res) => {
        try {
          const newBook = new Book(req.body);
          const savedBook = await newBook.save();
          if (req.body.author) {
            //const author = Author.find({_id: req.body.author})
            const author = Author.findById(req.body.author);
            await author.updateOne({ $push: { books: savedBook._id } });
          }
          res.status(200).json(savedBook);
        } catch (err) {
          res.status(500).json(err);
        }
    },

    //GET ALL BOOK
    getAllBooks: async (req, res) => {
        try {
          const books = await Book.find();
          res.status(200).json(books);
        }catch (err) {
          res.status(500).json(err);
        }
    },
    //GET A BOOK
    getABook: async (req, res) =>{
        try{
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    //Update a book
    updateABook: async (req, res) =>{
        try{
            const book = await Book.findById(req.params.id);
            await book.updateOne({$set: req.body})
            res.status(200).json("Update success")
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    deleteABook: async (req, res) =>{
      try{
          //Tìm những cuốn cách và lấy nó ra
          await Author.updateMany(
            {books: req.params.id}, 
            {$pull: {books: req.params.id}} // Vì book trong author là 1 array
          )
          //Tìm id sách và xoá đi
          await Book.findByIdAndDelete(req.params.id);
          res.status(200).json("Delete success")
      }
      catch(err){
          res.status(500).json(err)
      }
  },
};


module.exports = bookController;