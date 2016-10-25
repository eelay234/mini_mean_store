console.log('routes');
var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');

// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.get('/show', customers.show);
  app.get('/show/:id', customers.showCustomer);
  app.post('/add', customers.add);
  app.post('/delete/:id', customers.delete);
  app.get('/products', products.show);
  app.get('/product/:id', products.showProduct);
  app.post('/add_product', products.add);
  app.get('/orders', orders.show);
  app.post('/add_order', orders.add);
  app.post('/delete/:id', orders.delete);
  // app.get('/friends/:id', friends.show);
  // app.post('/friends', friends.create);
  // app.post('/friends/:id', friends.update);
  // app.delete('/friends/:id', friends.delete);
  // app.post('/users/login', users.login);
  // app.post('/users', users.registration);
  // app.post('/post', posts.post);
  // app.get('/posts', posts.posts);
  // app.post('/add_comment/:id', posts.add_comment);
}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
