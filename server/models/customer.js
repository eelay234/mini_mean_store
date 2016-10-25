console.log('Customer model');
var mongoose = require('mongoose');
require('mongoose-type-email');
var uniqueValidator = require('mongoose-unique-validator');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
var CustomerSchema = new mongoose.Schema({
   name:  { type: String, required: true, minlength: 3, unique: true,},
   created_date: { type: Date, default: new Date() }
 }, {timestamps: true });
CustomerSchema.plugin(uniqueValidator);
mongoose.model('Customer', CustomerSchema); // We are setting this Schema in our Models as 'Friend'
