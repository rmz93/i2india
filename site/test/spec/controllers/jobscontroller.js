'use strict';

describe('Controller: JobscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('siteApp'));

  var JobscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JobscontrollerCtrl = $controller('JobscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
