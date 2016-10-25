console.log('product Factory');
app.factory('productFactory', ['$http', function($http) {
  // constructor for our factory
  var factory = {};
  factory.getProducts = function(callback) {
    $http.get('/products').then(function(returned_data){
      console.log("return from http get products:"+returned_data);
      callback(returned_data);
    });
  };
  factory.getProduct = function(id, callback) {
    $http.get('/product/'+id).then(function(returned_data){
      console.log("return from http get product:"+returned_data);
      callback(returned_data);
    });
  };
  factory.add_product = function(req, callback){// what parameters do we need?
        // Your code here
        console.log("productFactory add_product:"+req.name);
        $http.post('/add_product', req).then(function(returned_data){
          console.log("return from http add product:"+returned_data);
          callback(returned_data);
        });
  };
  return factory;
}]);
