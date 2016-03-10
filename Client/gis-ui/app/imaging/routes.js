'use strict';

angular.module('sbAdminApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard.imaging', {
                url: '/imaging',
                templateUrl:'app/imaging/index.html',
                controller: 'ImagingCtrl',
                controllerAs: 'vm'
            });
    });
