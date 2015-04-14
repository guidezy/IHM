'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope,$http) {
    $http.get('/data/model.json').
      success(function(data) {
        $scope.infos = data;
      })
  });
