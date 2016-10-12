'use strict';

angular.module('search')
        .component('search', {
            templateUrl: 'app/components/search/search.template.html',
            controller: function SearchController($rootScope, $scope, $log) {

                $scope.search = function () {
                    $log.debug($scope.query);
                    $rootScope.$broadcast('search-start', $scope.query);
                };
            }
        });
