'use strict';

angular.module('sbAdminApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard.onlineMaps', {
                url: '/online-maps',
                templateUrl:'app/onlineMaps/index.html',
                controller: 'OnlineMapsCtrl',
                controllerAs: 'vm'
            });
    });
