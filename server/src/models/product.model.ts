import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  name: String,
  price: Number,
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  long_desc: String,
  short_desc: String,
  category: String
})

const Product = model('Product', productSchema)
export default Product
