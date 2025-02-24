const express = require('express');
const router = express.Router();
const db = require('../config/db');

//Get all categories
router.get('/categories', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM kategori');
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//add a new category
router.post('/categories', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({error: 'Name is required'});
    }

    db.query('INSERT INTO kategori (name) VALUES (?)', [name], (err, results) => {
        if (err) {
            res.status(500).json({error: err.message});
        }else {
            res.status(201).json({id: results.insertId, name});
        }
    });
});

//edit category
router.put('/:id', (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    if (!name) {
        return res.status(400).json({error: 'Name is required'});
    }

    db.query('UPDATE kategori SET name = ? WHERE id = ?', [name, id], (err, results) => {
        if (err) {
            res.status(500).json({error: err.message});
        }else {
            res.status(201).json({message : 'Category Updated',id, name});
        }
    });
});

//delete category
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM kategori WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({error: err.message});
        }else {
            res.status(201).json({message : 'Category Deleted',id});
        }
    });
});

module.exports = router;