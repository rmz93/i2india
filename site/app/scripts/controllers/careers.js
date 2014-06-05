'use strict';

angular.module('siteApp')
  .controller('CareersCtrl', function ($scope) {
    $scope.jobs = [
    {
    	title: 'Manager',
    	skills: 'HR, Coding'
    },
    {
    	title: 'Chef',
    	skills: 'Food'
    },
    ];
  });
