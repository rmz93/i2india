'use strict';

angular.module('siteApp')
  .controller('CareersCtrl', function ($scope) {
    $scope.jobs = [
    {
    	title: 'Manager',
        job_description: 'evfjdksl',
        write_to: 'email@hfjkd.nifsk'
        
    },
    {
    	title: 'Chef',
    	skills: 'Food'
    },
    ];
  });
