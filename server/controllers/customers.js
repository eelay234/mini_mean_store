//var bcrypt = require('bcrypt');
//var bcrypt = require('bcrypt-nodejs')
var bcrypt = require('bcryptjs');

console.log('customers controller');
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     re.test(email)
// };
module.exports = {
  show: function(req, res) {
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      Customer.find({}, function(err, customers) {
        if(err) {
          console.log('ERROR: '+err);
          res.json("error");
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully find customers!');
          //res.render('index', {mongooses: mongooses});
          //res.json({mongooses: mongooses});
          console.log(customers);
          return res.json(customers);
        }
      })
  },
  showCustomer: function(req, res) {
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      Customer.findOne({id: req.parqams.id}, function(err, customer) {
        if(err) {
          console.log('ERROR: '+err);
          res.json("error");
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully find customer!');
          //res.render('index', {mongooses: mongooses});
          //res.json({mongooses: mongooses});
          console.log(customer);
          return res.json(customer);
        }
      })
  },
  add: function(req, res) {
    var customer = new Customer({name: req.body.name, created_date: new Date()});
    Customer.findOne({name: req.body.name}, function(err, returned) {
      if (returned) {
        res.json("exist");
      }else {
        customer.save(function (err) {
            if (err) return res.json("error");
            res.json("added");
          });
      }
    })
  },
    delete: function(req, res) {
      Customer.remove({_id: req.params.id}, function(err) {
        if(err) {
          console.log("error");
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully remove friend!');
          res.json("removed");
        }
      })
    }
}
