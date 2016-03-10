'use strict';

angular.module('sbAdminApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard.intelligence', {
                url: '/intelligence',
                templateUrl:'app/intelligence/index.html',
                controller: 'IntelligenceCtrl',
                controllerAs: 'vm'
            });
    });
