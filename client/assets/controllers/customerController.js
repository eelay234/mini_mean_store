app.controller('customerController', ['$scope','customerFactory', 'orderFactory', '$http', '$location', function($scope, customerFactory,
               orderFactory, $http, $location ) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
   var getCustomers = function(){
        customerFactory.getCustomers(function(returnedData){
            $scope.customers = returnedData.data;
            console.log($scope.customers);
        });
  };
  getCustomers();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
$scope.add_customer = function(){
        console.log("OOOO:"+$scope.customer.name);
        customerFactory.add_customer($scope.customer, function passedToCustomerFactoryCreate(res){
          console.log(res.data);
          if (res.data === "exist") {
            console.log("errMessage="+res);
            $scope.errMessage = "Customer Exists";
          }
          if (res.data == "error") {
            $scope.errMessage = "error when add customer: "+res;
          }
          if (res.data == "added") {
            getCustomers();
            $scope.customer.name = "";
          }
        });
    }
$scope.remove_customer = function(id) {
        console.log("deleting "+id);
        customerFactory.remove_customer(id, function(res){
          if (res.data == "error")
            $scope.errMessage = "something wronmg when remove...";
          else if (res.data == "removed")
            getCustomers();
            orderFactory.remove_order(id);
        });
      }

}]);
