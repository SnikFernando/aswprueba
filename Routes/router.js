const { Router,response } = require('express');
const { ListProduct, CreateProduct} = require('../controller/ProductController')
const router = Router();
router.get('/', ListProduct);
router.put('/', CreateProduct);


module.exports = router;