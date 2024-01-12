require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const app = express();
const productRouter = require('./routes/product')
const db = require('./config/db')
const cors = require('cors')
const path = require('path')

db.db()
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_URL)))
console.log("ENV", process.env.PUBLIC_URL)
app.use('/product', productRouter.router)
app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
});