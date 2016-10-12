(function(){
  'use strict';

  angular.module('yotest2')
    .component('forecast', {
      templateUrl: 'app/components/forecast/forecast.template.html',
      controller: function ForecastController(ForecastService, $scope, $rootScope, $log, $cacheFactory) {

        var searchStart = $rootScope.$on('search-start', function (event, query) {
          $scope.getWeather(query);
        });

        $rootScope.$on('$destroy', searchStart);

        $scope.getWeather = function(city){
          ForecastService.getWeatherForecast(city).then(function(response){
            $scope.model = response;
          });
        };

        $scope.getWeather('Lodz');


        $scope.totalItems = 34;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 5;
        $scope.maxSize = 5; //Number of pager buttons to show

        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
          $log.debug('Page changed to: ' + $scope.currentPage);
        };

        $scope.setItemsPerPage = function(num) {
          $scope.itemsPerPage = num;
          $scope.currentPage = 1; //reset to first paghe
        };

        $scope.citiesKey = [];
        // $scope.cache = $cacheFactory('cacheId');
        // $scope.put = function(key, value) {
        //   if (angular.isUndefined($scope.cache.get(key))) {
        //     $scope.keys.push(key);
        //   }
        //   $scope.cache.put(key, angular.isUndefined(value) ? null : value);
        // };

      }

    });
}) ();

