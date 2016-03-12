'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('MainCtrl', function ($scope) {

        $scope.layers = {
            baselayers: {
                xyz: {
                    name: 'OpenStreetMap (XYZ)',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                }
            },
            overlays: {
                wms: {
                    name: 'EEUU States (WMS)',
                    type: 'wms',
                    visible: true,
                    url: 'http://suite.opengeo.org/geoserver/usa/wms',
                    layerParams: {
                        layers: 'usa:states',
                        format: 'image/png',
                        transparent: true
                    }
                },
                cities: {
                    name: 'world cities',
                    type: 'wms',
                    visible: true,
                    url: 'http://suite.opengeo.org/geoserver/opengeo/wms',
                    layerParams: {
                        layers: 'opengeo:countries',
                        format: 'image/png',
                        transparent: true
                    }
                }
            }
        }
    });
