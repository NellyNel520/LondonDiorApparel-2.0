const mongoose = require('mongoose')
const UserSchema = require('./user')
const ProductSchema = require('./product')
const CartSchema = require('./cart')
const OrderSchema = require('./order')
const CategorySchema = require('./category')

const User = mongoose.model('User', UserSchema)
const Product = mongoose.model('Product', ProductSchema)
const Cart = mongoose.model('Cart', CartSchema)
const Order = mongoose.model('Order', OrderSchema)
const Category = mongoose.model('Order', CategorySchema)

module.exports = {
  User,
  Product,
  Cart,
  Order,
  Category
}