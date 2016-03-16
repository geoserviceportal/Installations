'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('MainCtrl', ['$rootScope', '$scope', 'leafletData', '$translate', function ($rootScope, $scope, leafletData, $translate) {

        $scope.mapLoaded = false;

        activate();

        $rootScope.$on('$translateChangeSuccess', function () {
            activate();
        });

        /////////;

        function activate() {
            var promise = $translate([
                'map.openStreetMap',
                'map.fire-stations',
                'map.emergency-rooms',
                'map.open-fire-map'
            ]);

            promise.then(function (translations) {

                $scope.layercontrol = {
                    icons: {
                        uncheck: "fa fa-toggle-off",
                        check: "fa fa-toggle-on"
                    }
                };
                $scope.madrid = {
                    lat: 40.415363,
                    lng: -3.707398,
                    zoom: 11
                };
                $scope.markers = {
                    m1: {
                        lat: 42.20133,
                        lng: 2.19110
                    }
                };

                $scope.layers = {
                    baselayers: {
                        osm: {
                            name: translations['map.openStreetMap'],
                            type: "xyz",
                            url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                            layerOptions: {
                                subdomains: ["a", "b", "c"],
                                attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                                continuousWorld: true
                            }
                        }
                        ,
                        cycle: {
                            name: "OpenCycleMap",
                            type: "xyz",
                            url: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
                            layerOptions: {
                                subdomains: ["a", "b", "c"],
                                attribution: "&copy; <a href=\"http://www.opencyclemap.org/copyright\">OpenCycleMap</a> contributors - &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                                continuousWorld: true
                            }
                        }
                    },
                    overlays: {
                        hillshade: {
                            name: "Hillshade Europa",
                            type: "wms",
                            url: "http://129.206.228.72/cached/hillshade",
                            visible: true,
                            layerOptions: {
                                layers: "europe_wms:hs_srtm_europa",
                                format: "image/png",
                                opacity: 0.25,
                                attribution: "Hillshade layer by GIScience http://www.osm-wms.de",
                                crs: L.CRS.EPSG900913
                            }
                            ,
                            group: "Raster"
                        }
                        ,
                        fire: {
                            name: translations['map.fire-stations'],
                            type: "xyz",
                            url: "http://openfiremap.org/hytiles/{z}/{x}/{y}.png",
                            layerOptions: {
                                attribution: "&copy; <a href=\"http://www.openfiremap.org\">OpenFireMap</a> contributors - &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                                continuousWorld: true
                            }
                            ,
                            group: translations['map.open-fire-map']
                        }
                        ,
                        em: {
                            name: translations['map.emergency-rooms'],
                            type: "xyz",
                            url: "http://openfiremap.org/eytiles/{z}/{x}/{y}.png",
                            layerOptions: {
                                attribution: "&copy; <a href=\"http://www.openfiremap.org\">OpenFireMap</a> contributors - &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                                continuousWorld: true
                            }
                            ,
                            group: translations['map.open-fire-map']
                        },
                        draw: {
                            name: 'draw',
                            type: 'group',
                            visible: true,
                            layerParams: {
                                showOnSelector: false
                            }
                        }
                    }
                };

                $scope.legend = {
                    position: 'bottomleft',
                    colors: ['#ff0000', '#28c9ff', '#0000ff', '#ecf386'],
                    labels: ['National Cycle Route', 'Regional Cycle Route', 'Local Cycle Network', 'Cycleway']
                };
                $scope.addFireLayer = function () {
                    this.layers.overlays.fire = {
                        name: "Fire Stations",
                        type: "xyz",
                        url: "http://openfiremap.org/hytiles/{z}/{x}/{y}.png",
                        layerOptions: {
                            attribution: "&copy; <a href=\"http://www.openfiremap.org\">OpenFireMap</a> contributors - &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                            continuousWorld: true
                        },
                        group: "Open Fire Map"
                    };
                };

                $scope.addEmergencyRooms = function () {
                    this.layers.overlays.em = {
                        name: "Emergency Rooms",
                        type: "xyz",
                        url: "http://openfiremap.org/eytiles/{z}/{x}/{y}.png",
                        layerOptions: {
                            attribution: "&copy; <a href=\"http://www.openfiremap.org\">OpenFireMap</a> contributors - &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                            continuousWorld: true
                        },
                        group: "Open Fire Map"
                    };
                };
                $scope.addHillshadeLayer = function () {
                    this.layers.overlays.hillshade = {
                        name: "Hillshade Europa",
                        type: "wms",
                        url: "http://129.206.228.72/cached/hillshade",
                        visible: true,
                        layerOptions: {
                            layers: "europe_wms:hs_srtm_europa",
                            format: "image/png",
                            opacity: 0.25,
                            attribution: "Hillshade layer by GIScience http://www.osm-wms.de",
                            crs: L.CRS.EPSG900913
                        },
                        group: "Raster"
                    };
                };

                // Wait for center to be stablished
                leafletData.getMap().then(function () {
                    leafletData.getLayers().then(function(baselayers) {
                        var drawnItems = baselayers.overlays.draw;
                        map.on('draw:created', function (e) {
                            var layer = e.layer;
                            drawnItems.addLayer(layer);
                            console.log(JSON.stringify(layer.toGeoJSON()));
                        });
                    });
                });

                $scope.mapLoaded = true;
            });
        }

        $scope.controls = {
            fullscreen: {
                position: 'topleft'
            },
            minimap: {
                type: 'minimap',
                layer: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                toggleDisplay: true
            },
            draw: {position: 'bottomleft'}
        };

        $scope.defaults = {
            tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png"
        };

        $scope.removeFireLayer = function () {
            delete this.layers.overlays.fire;
        };

        $scope.existsFireLayer = function () {
            return ("fire" in this.layers.overlays);
        };

        $scope.removeEmergencyRooms = function () {
            delete this.layers.overlays.em;
        };

        $scope.existsEmergencyRooms = function () {
            return ("em" in this.layers.overlays);
        };
        $scope.removeHillshadeLayer = function () {
            delete this.layers.overlays.hillshade;
        };

        $scope.existsHillshadeLayer = function () {
            return ("hillshade" in this.layers.overlays);
        };
    }]);
