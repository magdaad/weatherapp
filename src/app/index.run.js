(function() {
  'use strict';

  angular
    .module('yotest2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
