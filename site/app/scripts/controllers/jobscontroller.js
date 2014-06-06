'use strict';

angular.module('siteApp')
  .controller('JobscontrollerCtrl', function ($scope) {
    return this.vacancies = jobs;
    
  });

var jobs = [
	{
		title: 'Manager',
		requirements: 'good in HR, good in coding',
	},
	{
		title: 'Chef',
		requirements: 'good food skills',
	},
];

/*
company,
title,
job description,
skills,
reply-to,*/