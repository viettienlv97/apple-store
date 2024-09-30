import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  name: String,
  price: Number,
  imageUrl: String,
  category: String,
})

const Product = model('Product', productSchema)
export default Product