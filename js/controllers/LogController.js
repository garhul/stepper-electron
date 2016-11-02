'use strict';
angular.module('app').controller('LogController',
  function  CommController ($scope, $injector) {
    var $Comm = $injector.get('commService');

    $scope.opts = {};
    $scope.connected = false;

    function showMe() {

    }

    function hideMe() {

    }


    //private methods


    //scope exposed methods

    $scope.connect = function() {
      // $Comm.open($scope.port,$scope.baudRate,$scope.opts);
      console.log("attempting connection...",$scope);
    }

  });
