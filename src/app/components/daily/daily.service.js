(function() {
'use strict';

angular
  .module('yotest2')
  .factory('DailyService', DailyService);

  /** @ngInject */
  function DailyService($http, $q, $log, $cacheFactory){
    var factory = {
      getDailyWeather: getDailyWeather
    };

    return factory;

    function getDailyWeather(city) {
      var model = {};


      return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=metric&cnt=12&appid=25e6549b5616520ceca94ff0ab97d36d', {cache: true}
      ).then(function (response) {
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

          return $q.when(model);

        } else {
          $log.debug("not found");

          alert("City not found");
        }

      });

    }

  }

//         .factory('DailyService', ['$http', '$q', function ($http, $q) {
//
//
//             }]);
//
})();
