'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('AboutCtrl', function ($scope,$http) {
    $http.get('/data/model.json').
      success(function(data) {
        $scope.infos = data;
      })
  });
