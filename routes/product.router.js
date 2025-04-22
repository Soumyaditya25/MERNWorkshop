const express = require("express");
const {getAllProducts, getProductById, createProduct} = require('../controllers/product.controller')
let productRouter = express.Router();

productRouter.get("/",getAllProducts)

productRouter.get("/:id",getProductById)

productRouter.post("/",createProduct)

module.exports = productRouter;