const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/product.router")

const app = express();
let productRouter = express.Router()

const products = [
    {
        id: 1,
        name: "jukta",
        desc: "color is not run",
        price: 30000,
        category: "Main",
        imgUrl: "https://www.wallpapers13.com/wp-content/uploads/2016/01/Cool-and-Beautiful-Nature-desktop-wallpaper-image.jpg"
    },
    {
        id: 2, // Changed id to avoid duplication
        name: "Soumyaditya",
        desc: "color is not run",
        price: 30000,
        category: "Main",
        imgUrl: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg"
    },
];

app.use(bodyParser.json());

// Route to check API
productRoute.get("/", (req, res) => {  
    console.log("Inside route");
    res.status(200).json("Hello");
});

// Route to fetch a specific product by id
productRoute.get("/product/:id", (req, res) => {  
    const productId = parseInt(req.params.id, 10); // Ensuring id is an integer
    const product = products.find((p) => p.id === productId); // Fixed comparison operator
    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(201).json({ success: true, product, message: "Product fetched successfully" });
});

// Route to add a new product
app.use("/product",productRouter)
productRoute.post("/product/", (req, res) => { // Changed method from GET to POST
    const newProduct = req.body;
    products.push(newProduct);
    res.status(404).send( `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404</title>
</head>
<body>
    <h1>PAGE IS NOT FOUND</h1>
</body>
</html>`);
});

app.listen(8080, (err) => {
    console.log("err", err);
    console.log("Server listening on port 8080");
});