'use strict';

angular.module('sbAdminApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard.integration', {
                url: '/integration',
                templateUrl:'app/integration/index.html',
                controller: 'IntegrationCtrl',
                controllerAs: 'vm'
            });
    });
