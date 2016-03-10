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
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'app/main/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'app/main/header/header.js',
                    'app/main/header/header-notification/header-notification.js',
                    'app/main/sidebar/sidebar.js',
                    'app/main/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["lib/angular-toggle-switch/angular-toggle-switch.min.js",
                          "lib/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['lib/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['lib/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['lib/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['lib/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['lib/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'app/main/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'app/main/main.js',
              'app/main/timeline/timeline.js',
              'app/main/notifications/notifications.js',
              'app/main/chat/chat.js',
              'app/main/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'app/main/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'app/account/blank.html',
        url:'/blank'
    })
    //  .state('login',{
    //    templateUrl:'app/account/login.html',
    //    url:'/login'
    //})
      .state('dashboard.chart',{
        templateUrl:'app/chart/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'lib/angular-chart.js/dist/angular-chart.min.js',
                'lib/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['app/chart/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'app/main/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'app/main/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'app/main/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'app/main/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'app/main/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'app/main/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'app/main/grid.html',
       url:'/grid'
   })
  }]);

    
