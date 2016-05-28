'use strict';

angular.module('sbAdminApp').controller('OnlineMapsCtrl', onlineMaps);

/* @ngInject */
function onlineMaps($http, $filter, $scope, $uibModal) {
    var vm = this;

    var colors = {
        green: '#2BFD40',
        orange: '#F8BA48',
        red: '#FF1717'
    };

    vm.paths = {};
    vm.totalNumber = 0;
    vm.title = null;

    vm.inlineOptions = {
        showWeeks: true
    };

    vm.getDataFromDate = getDataFromDate;
    $scope.$on('leafletDirectivePath.click', function (event, path) {
        $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: function ($scope, feature, $uibModalInstance) {

                $scope.feature = feature;
                $scope.ok = function () {
                    $uibModalInstance.close();
                };

                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            },
            resolve: {
                feature: function () {
                    return path.leafletObject.options.feature;
                }
            }
        });
    });

    init();

    //////////

    function init() {
        getDataFromDate(new Date());
    }

    function getDataFromDate(date) {
        vm.paths = {};
        var formattedDate = $filter('date')(date, 'yyyy-MM-dd');

        // limited to 20000 events
        $http.get('http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=' + formattedDate)
            .then(function (data) {
                addCircles(data.data.features);
            });
    }

    function getColorByMag(mag) {
        if (mag > 4.9) return colors.red;
        if (mag > 3) return colors.orange;

        return colors.green;
    }

    function addCircles(features) {
        vm.totalNumber = features.length;

        for (var i = 0; i < vm.totalNumber; i++) {
            var feature = features[i],
                mag = feature.properties.mag;

            if (mag) {
                vm.paths[feature.id] = {
                    color: getColorByMag(mag),
                    weight: ~~(mag * 2),
                    opacity: 0.8,
                    //stroke: true,
                    //fillColor: '#ff69b4',
                    //fillOpacity: 0.8,
                    title: feature.properties.title,
                    feature: feature.properties,
                    clickable: true,
                    radius: mag * 1,
                    latlngs: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
                    type: 'circleMarker'
                };
            }
        }
    }
}
