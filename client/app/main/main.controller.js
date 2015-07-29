'use strict';

angular.module('pelnomocnicyApp')
  .controller('MainCtrl', ['$scope', '$http','$state', function ($scope, $http,$state) {
    $scope.sent = false;
    $scope.update = function(user) {
     $scope.sent = true;
      console.log(angular.toJson(user));
      $http.post('https://pelnomocnicy.apispark.net:443/v1/pelnomocnicies/', angular.toJson(user)).
  		success(function(data, status, headers, config) {
    /*	 console.log(data);
    	 console.log(status);
    	 console.log(headers);
    	 console.log(config);*/
        //usSpinnerService.stop('spinner-1');
        $scope.submited = false;
    	 $state.go('thankyou');
  }).
  error(function(data, status, headers, config) {
        //usSpinnerService.stop('spinner-1');
     $scope.sent = false;   
     console.log(data);
    	 console.log(status);
    	 console.log(headers);
    	 console.log(config)
  });
  };  
   $scope.submited = false;
 
  }]);
