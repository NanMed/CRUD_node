let router = require("express").Router()
let PagesController = require("../controllers/PagesController")
let ProductsController = require("../controllers/ProductsController")

router.get("/", PagesController.homepage)
router.get("/about-us", PagesController.about) 
// Identifica la ruta /products/create y la envía al controlador
router.get("/products/create", ProductsController.create)
// Almacena el producto
router.post('/products', ProductsController.store)
// Implementa ver el detalle de un producto
router.get('/products/:id', ProductsController.show);
// Implementa editar un producto
router.get('/products/:id/edit', ProductsController.edit);
// Maneja la actualización del producto
router.put('/products/:id', ProductsController.update);
// Elimina el producto
router.delete('/products/:id', ProductsController.delete);

module.exports = router
