/**
 * Created by webdev on 4/3/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:EducCtrl
 * @description
 * # EducCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('EducCtrl', function ($scope,$http) {
    $http.get('/data/model.json').
      success(function(data) {
        $scope.infos = data;
      });
  });
