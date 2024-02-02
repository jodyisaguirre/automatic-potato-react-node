const express = require("express");

const router = express.Router();

const userController = require('../controllers/users')



router.get("/", userController.getUsers);

router.post("/", userController.addUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
