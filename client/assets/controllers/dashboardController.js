app.controller('dashboardController', ['$scope', 'customerFactory', 'productFactory', 'orderFactory',
        function($scope, customerFactory, productFactory, orderFactory) {

    customerFactory.getCustomers(function(returnedData){
              $scope.customers = returnedData.data;
              console.log($scope.customers);
    });
    productFactory.getProducts(function(returnedData){
              $scope.products = returnedData.data;
              console.log($scope.products);
    });
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
}]);
