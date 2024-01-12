const fs = require("fs")
const { Product } = require("./../models/product")

exports.getProduct = ((req, res) => {
    console.log(Product)
    console.log("Called")
    res.send("Thank you...")
})
exports.createProduct = (async (req, res) => {
    try {
        console.log("Product Creating")
        console.log(req.body)
        const newProduct = await Product.create(req.body);
        console.log("New Product Created")
        res.status(200).send({
            message: "Product Created",
            newProduct: req.body
        })
    } catch (error) {
        res.send(error)
    }
})

exports.getAllProducts = (async (req, res) => {
    try {
        const products = await Product.find();
        console.log(products)
        res.status(200).send({
            message: "All Product Find",
            length: products.length,
            products
        })
    } catch (error) {

    }
})

exports.getProduct = (async (req, res) => {
    try {
        const productId = req.params.id
        const product = await Product.findById(productId);
        console.log(product)
        res.status(200).send({
            message: "Single Product Find",
            product
        })
    } catch (error) {
        res.status(404).send({
            message: "Failed to Find Product",
            error
        })
    }
})

exports.updateProduct = (async (req, res) => {
    try {
        console.log("Updating Product")
        const productId = req.params.id
        const newData = req.body
        const oldProduct = await Product.findByIdAndUpdate(productId, newData);
        console.log("Product Updated")
        res.status(200).send({
            message: "Product Updated",
            oldProduct
        })
    } catch (error) {
        res.status(404).send({
            message: "Failed to Update Product",
            error
        })
    }
})

exports.replaceProduct = (async (req, res) => {
    try {
        console.log("Replaceing Product")
        const productId = req.params.id
        const newData = req.body
        const oldProduct = await Product.findOneAndReplace({ _id: productId }, newData);
        console.log(newProduct)
        console.log("Product Replaced")
        res.status(200).send({
            message: "Product Replaced",
            oldProduct
        })
    } catch (error) {
        res.status(404).send({
            message: "Failed to Replace Product",
            error
        })
    }
})

exports.deleteProduct = (async (req, res) => {
    try {
        console.log("Deleting Product")
        const productId = req.params.id
        const oldProduct = await Product.findByIdAndUpdate(productId);
        console.log("Product Deleted")
        res.status(200).send({
            message: "Product Deleted",
            oldProduct
        })
    } catch (error) {
        res.status(404).send({
            message: "Failed to Delete Product",
            error
        })
    }
})