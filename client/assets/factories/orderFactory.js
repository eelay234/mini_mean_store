console.log('order Factory');
app.factory('orderFactory', ['$http', function($http) {
  // constructor for our factory
  var factory = {};
  factory.getOrders = function(callback) {
    $http.get('/orders').then(function(returned_data){
      console.log("return from http get:"+returned_data);
      callback(returned_data);
    });
  };
  factory.add_order = function(req, callback){// what parameters do we need?
        // Your code here
        console.log("orderFactory add_order:"+req.customer);
        $http.post('/add_order', req).then(function(returned_data){
          console.log("return from http get:"+returned_data);
          callback(returned_data);
        });
  };
  factory.remove_order = function(id, callback) {
    $http.post('/delete_order/'+id).then(function(returned_data){
      console.log("return from http get:"+returned_data);
      callback(returned_data);
    });
  }
  return factory;
}]);
