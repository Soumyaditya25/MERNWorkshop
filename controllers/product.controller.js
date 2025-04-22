const products = [
    {
        id: 1,
        name: "Air Conditioner",
        desc: "Cools down the environment",
        price: 50000,
        category: "Electronics",
        imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-j9cKfTN97dkM7GPsjA8uqh_B-Fj9Nd3IAhU1hciwsinDMwJug4BGm31GaY7Fge2Mmb5VWBk_VHTTtHdPCmyqcI3VJS2IyM6UuwQRBG32XzyOmFXvWe5Tyg"
    },{
        id: 2,
        name: "Trophy for KKR",
        desc: "KKR Wins",
        price: 999999999999.99,
        category: "IPL",
        imgUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/22/full/1711089108-3549.jpg"
    }
]

let getAllProducts = (req,res)=>{
    res.status(200).json({success:true,message:"Products fetched successfull",data:products})
}

let getProductById = (req,res)=>{
    var productId = req.params.id;
    let product = products.find((p)=>{
        return p.id == productId;
    })
    if(!product) {
        res.status(404).json({success:false,"message":"Product not found"})
    }
    res.status(200).json({success:true,message:"Product fetched successfull",data:product})
}

let createProduct = (req,res)=>{
    try {
        let body = req.body;
        let error = validateProduct(body);
        if(error) {
            console.log(products)
        }
        products.push(body)
        res.status(201).json({success:true,message:"Product Created successfully"});
    }
    catch(err) {
        res.status(400).json({success:false,message:err.message});
    }
}

let validateProduct = (product)=> {
    if(!product) {
        throw new Error("Please pass a valid product")
    }
    if(!product.name || !product.id || !product.desc || !product.category) {
        throw new Error("Required feilds are Missing")
    }
    if(isNaN(product.id)) {
        throw new Error("id must be a number")
    }
    return false;
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
}