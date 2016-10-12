(function() {
  'use strict';

  angular
    .module('yotest2')
/*    templateUrl: 'app/components/daily/daily.template.html',*/
    .controller('DailyController', DailyController);

  /** @ngInject */

  function DailyController(DailyService, $rootScope){

    var vm = this;
    var searchStartEvent = $rootScope.$on('search-start', function (event, query) {
      vm.getWeather(query);
    });

    $rootScope.$on('$destroy', searchStartEvent);


    vm.getWeather = function (city) {
      DailyService.getDailyWeather(city).then(function (response) {
        vm.model = response;
      });
    };

    vm.getWeather("warsaw");

  }


})();
