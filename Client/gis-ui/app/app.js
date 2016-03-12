'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
    .module('sbAdminApp', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'leaflet-directive',
        'ngResource',
        'ngCookies',
        'satellizer',
        'pascalprecht.translate'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$authProvider', '$translateProvider',
        function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $authProvider, $translateProvider) {

            $authProvider.facebook({
                clientId: '1581139255538498'
            });

            $ocLazyLoadProvider.config({
                debug: false,
                events: true
            });

            $urlRouterProvider.otherwise('/dashboard/home');

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/main/dashboard/main.html',
                    resolve: {
                        loadMyDirectives: function ($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: 'sbAdminApp',
                                    files: [
                                        'app/main/header/header.js',
                                        'app/main/header/header-notification/header-notification.js',
                                        'app/main/sidebar/sidebar.js',
                                        'app/main/sidebar/sidebar-search/sidebar-search.js'
                                    ]
                                }),
                                $ocLazyLoad.load(
                                    {
                                        name: 'toggle-switch',
                                        files: ["lib/angular-toggle-switch/angular-toggle-switch.min.js",
                                            "lib/angular-toggle-switch/angular-toggle-switch.css"
                                        ]
                                    }),
                                $ocLazyLoad.load(
                                    {
                                        name: 'ngAnimate',
                                        files: ['lib/angular-animate/angular-animate.js']
                                    })
                            $ocLazyLoad.load(
                                {
                                    name: 'ngCookies',
                                    files: ['lib/angular-cookies/angular-cookies.js']
                                })
                            $ocLazyLoad.load(
                                {
                                    name: 'ngResource',
                                    files: ['lib/angular-resource/angular-resource.js']
                                })
                            $ocLazyLoad.load(
                                {
                                    name: 'ngSanitize',
                                    files: ['lib/angular-sanitize/angular-sanitize.js']
                                })
                            $ocLazyLoad.load(
                                {
                                    name: 'ngTouch',
                                    files: ['lib/angular-touch/angular-touch.js']
                                })
                        }
                    }
                })
                .state('dashboard.home', {
                    url: '/home',
                    controller: 'MainCtrl',
                    templateUrl: 'app/main/dashboard/home.html',
                    resolve: {
                        loadMyFiles: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'sbAdminApp',
                                files: [
                                    'app/main/main.js',
                                    'app/main/timeline/timeline.js',
                                    'app/main/notifications/notifications.js',
                                    'app/main/chat/chat.js',
                                    'app/main/dashboard/stats/stats.js'
                                ]
                            })
                        }
                    },
                    authenticate: true,
                    pageTitle: 'Dashboard - Home Page'
                })
                .state('dashboard.form', {
                    templateUrl: 'app/main/form.html',
                    url: '/form'
                })
                .state('dashboard.blank', {
                    templateUrl: 'app/account/blank.html',
                    url: '/blank'
                })
                .state('dashboard.chart', {
                    templateUrl: 'app/chart/chart.html',
                    url: '/chart',
                    controller: 'ChartCtrl',
                    resolve: {
                        loadMyFile: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'chart.js',
                                files: [
                                    'lib/angular-chart.js/dist/angular-chart.min.js',
                                    'lib/angular-chart.js/dist/angular-chart.css'
                                ]
                            }),
                                $ocLazyLoad.load({
                                    name: 'sbAdminApp',
                                    files: ['app/chart/chartContoller.js']
                                })
                        }
                    }
                })
                .state('dashboard.table', {
                    templateUrl: 'app/main/table.html',
                    url: '/table'
                })
                .state('dashboard.panels-wells', {
                    templateUrl: 'app/main/panels-wells.html',
                    url: '/panels-wells'
                })
                .state('dashboard.buttons', {
                    templateUrl: 'app/main/buttons.html',
                    url: '/buttons'
                })
                .state('dashboard.notifications', {
                    templateUrl: 'app/main/notifications.html',
                    url: '/notifications'
                })
                .state('dashboard.typography', {
                    templateUrl: 'app/main/typography.html',
                    url: '/typography'
                })
                .state('dashboard.icons', {
                    templateUrl: 'app/main/icons.html',
                    url: '/icons'
                })
                .state('dashboard.grid', {
                    templateUrl: 'app/main/grid.html',
                    url: '/grid'
                });

            $translateProvider.useStaticFilesLoader({
                prefix: 'i18n/',
                suffix: '.json'
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.useLocalStorage();
            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

        }])
    .run(['$rootScope', 'Auth', '$state', '$stateParams', function ($rootScope, Auth, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeStart', function (event, next) {

            if (next && next.authenticate) {
                Auth.isLoggedIn(function (loggedIn) {
                    if (!loggedIn) {
                        event.preventDefault();
                        $state.go('login');
                    }
                });

                // Check if route contain roles
                if (next.roles) {

                    //Auth.getCurrentUser(function (user) {
                    //    var currentUserRoles = user.roles;
                    //
                    //    // Check if the current users has one of route roles
                    //    if ((lodash.intersection(next.roles, currentUserRoles)).length === 0) {
                    //        event.preventDefault();
                    //        $state.go('login');
                    //    }
                    //});

                }
            }
        });
    }]);

    
