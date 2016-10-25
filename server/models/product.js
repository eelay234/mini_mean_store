var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 3 },
 image: { type: String, required: true, minlength: 6 },
 description: { type: String, required: true, minlength: 3 },
 quantity: {type: Number},
 created_date: { type: Date, default: new Date() }
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.
mongoose.model('Product', ProductSchema);
