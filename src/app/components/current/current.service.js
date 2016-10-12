(function() {
  'use strict';

  angular.module('yotest2')
    .factory('CurrentService', CurrentService);

  /** @ngInject */
  function CurrentService($http, $q, $log) {
    var factory = {
      getCurrentWeather: getCurrentWeather
    };

    return factory;

    function getCurrentWeather(city) {
      // console.log(city);

      var model = {};
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=0db3240d1b23b62aed9884d4c1a36984', {cache: true})
        .then(function (response) {
          //console.log(response);
          if (response.data.cod === 200) {
            model.myweather = response.data;

            model.temperature = model.myweather.main.temp;
            model.wind = model.myweather.wind.speed + 'm/s';
            model.desc = model.myweather.weather[0].description;
            model.sunrise = model.myweather.sys.sunrise;
            model.sunset = model.myweather.sys.sunset;
            model.clouds = model.myweather.clouds.all + '%';
            model.humidity = model.myweather.main.humidity + '%';
            model.pressure = model.myweather.main.pressure + ' hPa';
            model.city = model.myweather.name;
            model.weatherID = model.myweather.weather[0].id;
            //  console.log(model.myweather.weather[0].id);
            model.icon = model.myweather.weather[0].icon;
            model.main = model.myweather.weather[0].main;
            model.customStyle = {};

            return $q.when(model);
          } else {
            displayError();
          }

        })
        .catch(function () {
          displayError();
        });
    }

    function displayError() {
      $log.debug("ERROR");
    }
  }


    // .factory('CurrentService', ['$http', '$q', function ($http, $q) {
    //
    //
    // }]);

})();
