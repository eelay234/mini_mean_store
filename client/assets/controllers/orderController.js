app.controller('orderController', ['$scope','orderFactory', 'customerFactory', 'productFactory', '$http', '$location', function($scope, orderFactory,
               customerFactory, productFactory, $http, $location ) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
    var getCustomers = function(){
      customerFactory.getCustomers(function(returnedData){
          $scope.customers = returnedData.data;
          console.log("IIII:"+$scope.customers);
      });
    }

    $scope.customerNames = [];
    for (i in $scope.customers) {
      $scope.customerNames.push($scope.customers[i].name);
      //consoel.log("TTTT:"+$scope.customers[i].name);
    }
    getCustomers();
    console.log("TTTT:"+$scope.customerNames);
    var getProducts = function(){
      productFactory.getProducts(function(returnedData){
          $scope.products = returnedData.data;
          console.log("get products:"+$scope.products);
      });
    }
    $scope.productNames = [];
    for (i in $scope.products) {
      $scope.productNames.push($scope.products[i].name);
    }
    getProducts();

   var getOrders = function(){
        orderFactory.getOrders(function(returnedData){
            $scope.orders = returnedData.data;
            console.log("PPPP:"+$scope.orders);
            for (i in $scope.orders) {
              console.log("!!!!!!!!: "+$scope.orders[i]._customer);
              for (j in $scope.customers) {
                if ($scope.orders[i]._customer == $scope.customers[j]._id) {
                   $scope.orders[i].customerName = $scope.customers[j].name;
                   console.log("HRRE: "+$scope.orders[i].customerName);
                 }
              }
              for (j in $scope.products) {
                if ($scope.orders[i]._product == $scope.products[j]._id)
                   $scope.orders[i].productName = $scope.products[j].name;
              }
            }
        });
  };


  getOrders();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
$scope.add_order = function(){
        console.log("OOOO:"+$scope.order.customer);
        orderFactory.add_order($scope.order, function passedToOrderFactoryCreate(res){
          console.log(res.data);
          if (res.data == "not enough") {
            $scope.errMessage = "Not enough quantity";
          }
          if (res.data == "customer") {
            $scope.errMessage = "Please select a customer";
          }
          if (res.data == "product") {
            $scope.errMessage = "Please select a product";
          }
          if (res.data == "error") {
            $scope.errMessage = "error when add product: "+res;
          }
          if (res.data == "added") {
            getCustomers();
            getProducts();
            getOrders();
          }
        });
    }

}]);
