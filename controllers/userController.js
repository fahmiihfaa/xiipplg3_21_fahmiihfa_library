const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../models/userModel");

// Get All Users
const getAllUsers = async (req, res) => {
    try {
        const [users] = await getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get User by ID
const getUser = async (req, res) => {
    try {
        const [user] = await getUserById(req.params.id);
        if (user.length === 0) return res.status(404).json({ message: "User not found" });
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create User
const createNewUser = async (req, res) => {
    try {
        const { username, password, name, email, phone } = req.body;
        await createUser({ username, password, name, email, phone });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update User
const updateExistingUser = async (req, res) => {
    try {
        const { username, password, name, email, phone } = req.body;
        const { id } = req.params;
        await updateUser({ username, password, name, email, phone }, id);
        res.json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete User
const deleteExistingUser = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteUser(id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// **Pastikan ini diekspor dengan benar**
module.exports = { getAllUsers, getUser, createNewUser, updateExistingUser, deleteExistingUser };
