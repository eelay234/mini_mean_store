console.log('customer Factory');
app.factory('customerFactory', ['$http', function($http) {
  // constructor for our factory
  var factory = {};
  factory.getCustomers = function(callback) {
    $http.get('/show').then(function(returned_data){
      console.log("return from http get:"+returned_data);
      callback(returned_data);
    });
  };
  factory.getCustomer = function(id, callback) {
    $http.get('/show/'+id).then(function(returned_data){
      console.log("return from http get:"+returned_data);
      callback(returned_data);
    });
  };
  factory.add_customer = function(req, callback){// what parameters do we need?
        // Your code here
        console.log("customerFactory add_customer:"+req.name);
        $http.post('/add', req).then(function(returned_data){
          console.log("return from http get:"+returned_data);
          callback(returned_data);
        });
  };
  factory.remove_customer = function(id, callback) {
    $http.post('/delete/'+id).then(function(returned_data){
      console.log("return from http get:"+returned_data);
      callback(returned_data);
    });
  }
  return factory;
}]);
