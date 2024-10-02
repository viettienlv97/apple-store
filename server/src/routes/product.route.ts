import {Router} from 'express'
import productController from '../controllers/product.controller.ts'

const productRoute = Router()
productRoute.post('/create', productController.createProduct)
productRoute.get('/', productController.getProducts)
productRoute.get('/:id', productController.getProduct)

export default productRoute