const express= require('express')
const{
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/productController')

const router = express.Router()


//get all products
router.get('/', getProducts)

//get a single product
router.get('/:id', getProduct)

//post a new product
router.post('/', createProduct)

//delete a product
router.delete('/:id', deleteProduct)

//Update a product
router.patch('/:id', updateProduct)

module.exports = router