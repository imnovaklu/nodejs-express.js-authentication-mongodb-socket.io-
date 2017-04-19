var app = angular.module('myApp', []);

app.controller('formController', ['$scope', '$http', function ($scope, $http) {
    $scope.login = function () {
        $http.post("/login", {"username": $scope.username, "password":$scope.password})
            .success(function (data) {
                alert(data);
                $scope.username = "";
                $scope.password = "";
            })
    }
}]);