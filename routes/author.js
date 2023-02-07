const authorController = require("../controller/authorController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", authorController.addAuthor);

//Get all author
router.get("/", authorController.getAllAuthors);

//GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);

//UPDATE A AUTHOR
router.put("/:id", authorController.updateAAuthor);

//DELETE A AUTHOR
router.delete("/:id", authorController.deleteAAuthor);

module.exports =router; 