angular.module('sbAdminApp')
    .directive('mapToolbox', function () {
        return {
            templateUrl: 'app/toolbox/mapToolbox.html',
            restrict: 'E',
            replace: true,
            controller: function () {
                var vm = this;
            },
            controllerAs: 'vm'
        }
    });


