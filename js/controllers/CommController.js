'use strict';
angular.module('app').controller('CommController',
  function  CommController ($scope, $injector) {
    var $Comm = $injector.get('commService');
    var SerialPort = require('serialport');
    $scope.ports = [];
    $scope.baudrates = require('./js/config').baudrates;
    console.log("initializing connection panel");
    SerialPort.list(function (err, ports) {
      ports.forEach(function(port) {
        $scope.ports.push(port.comName);
        console.info(port.comName,port.pnpId, port.manufacturer);
      });
      $scope.port = $scope.ports[0];
      $scope.$apply()
    });

    $scope.opts = {};
    $scope.connected = false;

    function showMe() {

    }

    function hideMe() {

    }


    //private methods


    //scope exposed methods

    $scope.connect = function() {
      $scope.msg = `attempting connection to port ${$scope.port} @ ${$scope.baudrate}`;
      // $Comm.open($scope.port,$scope.baudRate,$scope.opts);
      console.log("attempting connection...",$scope);
    }

  });
