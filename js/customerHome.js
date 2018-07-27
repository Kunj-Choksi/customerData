/// <reference path="angular.js" />
app.controller('customerController', function ($scope, $firebaseObject, $firebaseArray, $animate) {
    $scope.items = [];
   
    /* Angular Fire  */
    var rootRef = firebase.database().ref().child('data');
    $scope.customers = $firebaseObject(rootRef);

    $scope.addItem = function () {
        var selectedItems = new Object()
        selectedItems.name = $scope.custItems;
        selectedItems.price = parseInt($scope.itemPrice);
        $scope.items.push(selectedItems)
        $scope.custItems = ""; $scope.itemPrice = "";
    };

    $scope.saveCustomer = function () {
        var customerInfo = new Object();
        var newCustomer = rootRef.push();
        customerInfo['name'] = $scope.custName;
        customerInfo['city'] = $scope.custCity;
        customerInfo['purchedItems'] = $scope.items;
        customerInfo['custId'] = newCustomer.key;       //Generating New Key and storing it in my Object
        newCustomer.set(customerInfo).then(function (rootRef) {
            console.log("Success")
        })
        $scope.custName = ""; $scope.custCity = ""; $scope.custItems = ""; $scope.itemPrice = ""; $scope.items = [];
    }

    //delete customer
    $scope.rmvCust = function (customer) {
        var custId = customer.custId;
        rootRef.child(custId).remove();
    }
    $scope.getTotal = function(customer){
        var sum = 0;
        var purchsedItems = customer.purchedItems
        purchsedItems.forEach(function(val){
            
            sum = sum + val.price;
        })
        return sum
    }
});