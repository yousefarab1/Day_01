
const { Router } = require('express');

const {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/:id', getProductById);

productRouter.post('/', createProduct);

productRouter.delete('/:id', deleteProduct);

productRouter.put('/:id', updateProduct);

module.exports = productRouter;