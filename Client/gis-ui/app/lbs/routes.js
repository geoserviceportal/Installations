'use strict';

angular.module('sbAdminApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard.lbs', {
                url: '/cyber',
                templateUrl:'app/LBS/index.html',
                controller: 'LbsCtrl',
                controllerAs: 'vm'
            });
    });
