const express = require("express");
const router = express.Router();
const { getAllUsers, getUser, createNewUser, updateExistingUser, deleteExistingUser } = require("../controllers/userController");

// Route untuk mengambil semua user
router.get("/users", getAllUsers);

// Route untuk mengambil user berdasarkan ID
router.get("/users/:id", getUser);

// Route untuk membuat user baru
router.post("/users", createNewUser);

// Route untuk mengupdate user berdasarkan ID
router.put("/users/:id", updateExistingUser);

// Route untuk menghapus user berdasarkan ID
router.delete("/users/:id", deleteExistingUser);

module.exports = router;
