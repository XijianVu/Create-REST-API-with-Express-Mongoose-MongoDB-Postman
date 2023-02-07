const mongoose = require("mongoose");

const authorScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    year:{
        type: Number,
        required: true
    },
    books:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
});

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    publishedDate:{
        type: String,

    },
    genres:{
        type: [String],
    },
    // Lay id
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
    },
});

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorScheme);

module.exports={Book, Author};
