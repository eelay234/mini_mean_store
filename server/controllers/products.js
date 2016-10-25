console.log('products controller');
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     re.test(email)
// };
module.exports = {
  show: function(req, res) {
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      Product.find({}, function(err, products) {
        if(err) {
          console.log('ERROR: '+err);
          res.json("error");
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully find products!');
          //res.render('index', {mongooses: mongooses});
          //res.json({mongooses: mongooses});
          console.log(products);
          return res.json(products);
        }
      })
  },
  showProduct: function(req, res) {
      // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
      Product.findOne({id: req.parmas.id}, function(err, product) {
        if(err) {
          console.log('ERROR: '+err);
          res.json("error");
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully find product!');
          //res.render('index', {mongooses: mongooses});
          //res.json({mongooses: mongooses});
          console.log(product);
          return res.json(product);
        }
      })
  },
  add: function(req, res) {
    console.log("add product"+req.body.name);
      console.log("add product"+req.body.image);
    var product = new Product({name: req.body.name, image: req.body.image, description: req.body.description,
      quantity: req.body.quantity, created_date: new Date()});
      product.save(function (err) {
            if (err) {
              console.log("error:"+err);
              return res.json("error");
            }
            res.json("added");
      });
  }
}
