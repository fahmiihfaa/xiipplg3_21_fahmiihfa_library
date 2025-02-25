const express = require('express')
const app = express()
const userreviews = require('./router/reviews')
const userrouter = require('./router/book')
const categoriesroutes = require('./router/categories')
const userRouter = require('./router/userRouter')
const loansRouter = require('./router/loans')

const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userreviews)
app.use(userrouter)
app.use(categoriesroutes)
app.use( userRouter)
app.use(loansRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})