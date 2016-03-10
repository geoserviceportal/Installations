'use strict';

angular.module('sbAdminApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('dashboard.cyber', {
                url: '/cyber',
                templateUrl:'app/cyber/index.html',
                controller: 'CyberCtrl',
                controllerAs: 'vm'
            });
    });
