const express = require('express')
const app = express()
const categoriesRoutes = require('./controllers/categories')
const userreviews = require('./router/reviews')
const db = require("./config/db"); // Import koneksi database dari config/db.js

const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/reviews', (req, res) => {
  db.query("SELECT * FROM reviews", (err, results) => {
    if (err) {
        return res.status(500).json({ error: err.message }); // Jika terjadi error, kirim respons 500
    }
    res.json(results); // Kirim hasil query sebagai JSON ke client
});
})

//router
app.use(userreviews)
app.use('/kategori', categoriesRoutes);

//start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})