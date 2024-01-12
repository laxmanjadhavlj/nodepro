const express = require("express");
const { createProduct, getProduct, getAllProducts, updateProduct, replaceProduct, deleteProduct } = require('../controller/product')
const router = express.Router()

router
    .post('/createproduct', createProduct)
    .get('/getallproducts', getAllProducts)
    .get('/getsingleproduct/:id', getProduct)
    .patch('/updateproduct/:id', updateProduct)
    .put('/replaceproduct/:id', replaceProduct)
    .delete('/deleteproduct/:id', deleteProduct)

exports.router = router