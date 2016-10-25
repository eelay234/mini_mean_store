var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
   _customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
   _product: {type: Schema.Types.ObjectId, ref: 'Product'},
   quantity: {type: Number},
   created_date: { type: Date, default: new Date() }
}, {timestamps: true });
mongoose.model('Order', OrderSchema);
