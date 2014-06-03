'use strict';

describe('Controller: IncubationModelCtrl', function () {

  // load the controller's module
  beforeEach(module('siteApp'));

  var IncubationModelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncubationModelCtrl = $controller('IncubationModelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
