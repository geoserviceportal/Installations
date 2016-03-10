'use strict';

angular.module('sbAdminApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard.realtime', {
                url: '/realtime',
                templateUrl:'app/realtime/index.html',
                controller: 'realtimeCtrl',
                controllerAs: 'vm'
            });
    });
