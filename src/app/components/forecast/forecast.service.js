(function () {
  'use strict';

  angular
    .module('yotest2')
    .factory('ForecastService', ForecastService);

  /** @ngInject */
  function ForecastService($http, $q, $log, $cacheFactory) {

    var weatherCache = $cacheFactory('cacheId');

    var factory = {
      getWeatherForecast: getWeatherForecast
    };
    return factory;

    // $cacheFactory.destroy();

    function getWeatherForecast(city) {
      var model = {};

      if (!weatherCache.get('forecast')) {
        console.log('Nie istnieje');
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=5210c9f8ef5d30fb6e37bb1c037d7ad0')
          .then(function (response) {
            $log.debug(response);
            if (response.data.cod === "200") {
              model.myweather = response.data;
              model.city2 = model.myweather.city.name;

              model.range = function (min, max, step) {
                step = step || 1;
                var input = [];

                for (var i = min; i <= max; i += step) {
                  input.push(model.myweather.list[i]);
                }
                return input;
              };
              weatherCache.put('forecast', model);
              return $q.when(model);
            }
            else {
              displayError();
            }
          });
      } else {
        console.log('istnieje');
        return $q.when(weatherCache.get('forecast'));
      }

    }

    function displayError() {
      $log.debug('error');
    }

  }

  /*    .factory('ForecastService', ['$http', '$q', function ($http, $q) {


   }]);*/
})();

