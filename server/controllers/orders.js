console.log('orders controller');
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product')
module.exports = {
  show: function(req, res) {
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      Order.find({}, function(err, orders) {
        if(err) {
          console.log('ERROR: '+err);
          res.json("error");
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully find orders!');
          //res.render('index', {mongooses: mongooses});
          //res.json({mongooses: mongooses});
          console.log(orders);
          return res.json(orders);
        }
      })
  },
  add: function(req, res) {
    console.log("add order "+req.body.customer);
      console.log("add order "+req.body.product);

      Product.findOne({_id: req.body.product}, function(err, product) {
        if (req.body.customer == null)
          return res.json("customer");
        if (req.body.product == null)
            return res.json("product");
        if (req.body.quantity > product.quantity)
          return res.json("not enough");
         product.quantity -= req.body.quantity;
         product.save();
         var order = new Order({_customer: req.body.customer, _product: req.body.product, quantity: req.body.quantity,
                 created_date: new Date()});
         order.save(function (err) {
                   if (err) {
                     console.log("error");
                     return res.json("error");
                   }
                   console.log("Success!");
                   res.json("added");
         });
      })
 },
 delete: function(req, res) {
   Order.remove({_customer: req.params.id}, function(err) {
     if(err) {
       console.log("error");
     } else { // else console.log that we did well and then redirect to the root route
       console.log('successfully remove order!');
       res.json("removed");
     }
   })
 }
}
