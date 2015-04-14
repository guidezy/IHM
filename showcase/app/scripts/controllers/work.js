/**
 * Created by webdev on 4/3/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('WorkCtrl', function ($scope,$http) {
    $http.get('/data/model.json').
      success(function(data) {
        $scope.infos = data;
      });
  });
