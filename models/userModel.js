const dbPool = require("../config/db"); // Gunakan dbPool dari MySQL2

// Ambil semua pengguna
const getUsers = () => {
    const SQLQuery = `SELECT * FROM users`;
    return dbPool.execute(SQLQuery);
};

// Ambil satu pengguna berdasarkan ID
const getUserById = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE id = ?`;
    return dbPool.execute(SQLQuery, [id]);
};

// Tambah pengguna baru
const createUser = (body) => {
    const SQLQuery = `INSERT INTO users (username, password, name, email, phone) VALUES (?, ?, ?, ?, ?)`;
    return dbPool.execute(SQLQuery, [body.username, body.password, body.name, body.email, body.phone]);
};

// Update data pengguna berdasarkan ID
const updateUser = (body, id) => {
    const SQLQuery = `UPDATE users SET username = ?, password = ?, name = ?, email = ?, phone = ? WHERE id = ?`;
    return dbPool.execute(SQLQuery, [body.username, body.password, body.name, body.email, body.phone, id]);
};

// Hapus pengguna berdasarkan ID
const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id = ?`;
    return dbPool.execute(SQLQuery, [id]);
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };