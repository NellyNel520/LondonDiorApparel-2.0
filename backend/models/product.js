const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Product = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categoryId: {type: Schema.Types.ObjectId, ref: 'Category'},
    size: [{ type: String, required: true }],
    color: [{ type: String, required: true }],
    price: { type: Number, required: true },
    inStock: { type: Number, default: true },
  },
  { timestamps: true }
)

module.exports = Product