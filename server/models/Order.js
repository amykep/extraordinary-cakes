const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({

  purchaseDate: {
    type: Date,
    default: Date.now
  },

  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],

  /* comments:[
   { 
     type: String, 
     default: ''
    }
  ] */
  
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
