const express = require("express");
const blogController = require("../Controllers/blogController");

const router = express.Router();

router.get("/blog/create", blogController.create);
router.get("/blog/read", blogController.read);
router.get("/blog/delete", blogController.delete);
router.get("/blog/update", blogController.update);

module.exports = router;
