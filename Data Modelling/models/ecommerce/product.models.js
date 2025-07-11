import mongoose from 'mongoose'
import { Category } from './category.models'

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  description:{
    requrired: true,
    type: String
  },
  productImage: {
    type: String
  },
  price: {
    type: Number,
    default: 0
  },
  stock: {
    default: 0,
    type: Number
  },
  category:{
    type: mongoose.Schema.types.ObjectId,
    ref: "Category",
    required: true
  },
  owerner: {
    type: mongoose.Schema.types.ObjectId,
    ref: "User"
  }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)