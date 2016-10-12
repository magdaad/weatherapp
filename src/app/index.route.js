(function() {
  'use strict';

  angular
    .module('yotest2')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
      templateUrl: 'app/components/current/current.template.html'
    })
      .when('/current', {
        templateUrl: 'app/components/current/current.template.html',
        controller: 'CurrentController',
        controllerAs: 'current'
      })
      .when('/forecast', {
        template:' <forecast></forecast>'
      })
      .when('/daily', {
        templateUrl: 'app/components/daily/daily.template.html',
        controller: 'DailyController',
        controllerAs: 'daily'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
