'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('header', function () {
        return {
            templateUrl: 'app/main/header/header.html',
            restrict: 'E',
            replace: true,
            controller: ['$translate', function ($translate) {
                var vm = this;

                vm.proposedLanguage = $translate.proposedLanguage;

                vm.switchLang = function (lang) {
                    $translate.use(lang);
                };
            }],
            controllerAs: 'headerCtrl'
        }
    });


