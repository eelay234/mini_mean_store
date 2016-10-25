app.controller('productController', ['$scope','productFactory', '$http', '$location', function($scope, productFactory,
               $http, $location ) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
   var getProducts = function(){
        productFactory.getProducts(function(returnedData){
            $scope.products = returnedData.data;
            console.log($scope.products);
        });
  };
  getProducts();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
$scope.add_product = function(){
        console.log("OOOO:"+$scope.product.name);
        productFactory.add_product($scope.product, function passedToProducFactoryCreate(res){
          console.log(res.data);
          if (res.data == "error") {
            $scope.errMessage = "error when add product: "+res;
          }
          if (res.data == "added") {
            getProducts();
            $scope.product.name = "";
            $scope.product.description = "";
            $scope.product.image = "";
            $scope.product.quantity = "";
          }
        });
    }

}]);
