const mongoose = require("mongoose");

const Order = new Schema(
  {
    userId:  {type: Schema.Types.ObjectId, ref: 'User', required:true},
    products: [
      {
        productId: {type: Schema.Types.ObjectId, ref: 'Product', required:true},
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = Order