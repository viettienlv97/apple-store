import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  totalPrice: Number,
  products: [{type: Schema.ObjectId, ref: 'Product'}],
  state: String,
  deliveryState: String,
  receiver: {
    name: String,
    phoneNumber: String,
    address: String
  }
})

const Order = model('Order', orderSchema)
export default Order