(function () {

  'use strict';

  angular.module('yotest2')
    .controller('CurrentController', CurrentController);

  /** @ngInject */
  function CurrentController($rootScope, CurrentService) {
    var vm = this;

    var searchStartEvent = $rootScope.$on('search-start', function (event, query) {
      vm.getWeather(query);
    });

    $rootScope.$on('$destroy', searchStartEvent);

    vm.getWeather = function (city) {
      CurrentService.getCurrentWeather(city).then(function (response) {
        vm.model = response;
      });
    };

    vm.getWeather("lodz");
  }

})();
