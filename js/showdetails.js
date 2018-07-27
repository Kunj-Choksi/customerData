/// <reference path="angular.js" />
var sum = 0;
app.controller('customerController', function($scope){
    $scope.getTotal = function(customer){
        var purchsedItems = customer.purchedItems
        purchsedItems.forEach(function(val){
            //sum = sum + val.price;
            console.log(val)
        })
    }
})