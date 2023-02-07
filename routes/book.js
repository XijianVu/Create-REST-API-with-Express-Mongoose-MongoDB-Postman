const bookController = require("../controller/bookController");

const router = require("express").Router();

//ADD book
router.post("/", bookController.addABook);

// Get all books
router.get("/", bookController.getAllBooks);

//GET A Book
router.get("/:id", bookController.getABook);

//UPDATE A BOOK
router.put("/:id", bookController.updateABook);

//DELETE A BOOK
router.delete("/:id", bookController.deleteABook);

module.exports=router