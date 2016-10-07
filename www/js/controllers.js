angular.module('app.controllers', [])
// $rootScope allows you to share data betwenn
.controller('formCtrl', ['$scope','$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $rootScope) {
  $scope.submit = function(data){
    var zipcode = document.getElementById('zip');
    var name = document.getElementById('name');

    var dataObj = {
      name : name.value,
      zip : zipcode.value
    };
    $http.post("http://localhost:8080/request", dataObj)
    .then(
      function(response){
        console.log(response);
      },
      function(response){
        console.log(response);
      }
    );
  }


}])
.controller('detailsController', ['$scope','$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http,$stateParams) {

  $http.get("http://localhost:8080/request/"+$stateParams.id)
  .then(
    function(response){
      $scope.detail = response.data;
      console.log(response.data);
    },
    function(response){
      console.log(response);
    }
  );
}])

.controller('cloudTabDefaultPageCtrl', ['$scope','$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http,$stateParams) {

  $scope.responses = [];
  $http.get("http://localhost:8080/request")
  .then(
    function(response){
      console.log(response.data);
      $scope.responses = response.data;
    },
    function(response){
      console.log(response);
    }
  );
}])
