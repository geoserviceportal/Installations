'use strict';

angular.module('sbAdminApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard.mapTube', {
                url: '/map-tube',
                templateUrl:'app/mapTube/index.html',
                controller: 'mapTubeCtrl',
                controllerAs: 'vm'
            });
    });
