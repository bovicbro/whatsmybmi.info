var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http)
{
  $scope.unit_length="cm";
  $scope.unit_weight="kg";
  // $scope.calculated = false;


  // This is for implementing switch for metric or imperial system

  // if ($scope.meassuring_system=='metric') {
  //   $scope.unit_length="cm";
  //   $scope.unit_weight="kg";
  // }else if ($scope.meassuring_system=='imperial') {
  //   $scope.unit_length="inches";
  //   $scope.unit_weight="pounds";
  // }

  $scope.clicked = function() {
    $scope.bmi_result=($scope.weight/(($scope.length/100)*($scope.length/100))).toFixed(2);
    for (var key in $scope.reference_values) {
      if ($scope.reference_values.hasOwnProperty(key)) {
        if ($scope.bmi_result<$scope.reference_values[key]) {
          $scope.state_result = key;
          break;
        }
      }
      $scope.calculated = true;
    }
  }

  $scope.close_result = function() {
    $scope.calculated = false;
  }

  $scope.reference_values = {
    "very severely underweight" : 15,
    "severely underweight" : 16,
    "underweight" : 18.5,
    "normal weight" : 25,
    "overweight" : 30,
    "obese Class I" : 35,
    "obese Class II" : 40,
    "obese Class III" : "N/a"
  }

}]);
