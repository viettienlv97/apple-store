import { Request, Response } from 'express'
import Product from '../models/product.model.ts'
import {
  responseSuccess,
  responseFail,
  HTTP_STATUS_CODE
} from '../utils/response.ts'

const createProduct = async (req: Request, res: Response) => {
  const { name, price, description, long_desc, short_desc } = req.body

  if (!name || !price || !description || !long_desc || !short_desc) {
    responseFail(res, HTTP_STATUS_CODE.BAD_REQUEST, 'Missing param')
    return
  }

  try {
    const product = await Product.findOne({ name })
    if (product) {
      responseFail(res, HTTP_STATUS_CODE.BAD_REQUEST, 'Product already existed')
      return
    }

    const newProduct = new Product({
      name,
      price,
      description,
      long_desc,
      short_desc
    })
    await newProduct.save()
    responseSuccess(res, newProduct)
  } catch (error) {
    responseFail(res, HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, 'Server error')
  }
}

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    responseSuccess(res, products)
  } catch (error) {
    responseFail(res, HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, 'Server error')
  }
}

const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) {
    responseFail(res, HTTP_STATUS_CODE.BAD_REQUEST, 'Missing param')
    return
  }
  try {
    const product = await Product.findOne({ _id: id })
    responseSuccess(res, product)
  } catch (error) {
    responseFail(res, HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, 'Server error')
  }
}

export default { createProduct, getProducts, getProduct }
