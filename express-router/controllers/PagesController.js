let ProductModel = require("../models/Product")

exports.homepage = (req, res) => {
    ProductModel.all()
        .then((data) => {
            let products = data;
            //console.log(products)
            res.render("pages/homepage", {productos: products})
        })
}

exports.about = (req, res) => {
    res.render("pages/aboutus")
}