angular.module('myLeaflet', [])
  .controller('MyCtrl', function () {
    var vm = this;
    
  })
  .controller('MyLeafletCtrl', function MyLeafletCtrl($scope, $element, $attrs, $window, $log, $timeout) {
    var vm = this;
    var L = $window.L;

    /* Containers */
    vm.id = null;
    vm.map = null;
    vm.mapOptions = {
      zoomControl: false,
      attributionControl: false
    };
    vm.basemaps = {};
    vm.overlays = {};
    vm.controls = {};

    // Constructor
    vm.init = init;

    ////////////////////
    function init(id) {
      /* Map */
      vm.id = id;
      vm.map = L.map(id, vm.mapOptions);
      // WTF
      vm.map.on("load", function(event) {
        $log.info('load', event);
      });


      /* Set View */
      vm.map.setView(L.latLng(19.5, -73), 7);

      /* Basemaps */
      vm.basemaps.osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(vm.map);
      
      
      /* Overlays */
      vm.overlays.geoJsonExample = L.geoJson(haiti, {
        style: function(feature) {
          return {
            
            opacity: 0.3,
            fillOpacity: 0.8,
            fillColor: "#0f0",
            weight: 5
          };
        }
      }).addTo(vm.map);

vm.overlays.geoJsonExample = L.geoJson(mix, {
        style: function(feature) {
          return {
            
            opacity: 0.3,
            fillOpacity: 0.8,
            fillColor: "#0f0",
            weight: 5
          };
        }
      }).addTo(vm.map);
      
      /* Controls */
      vm.controls.layersControl = L.control.layers(vm.basemaps, vm.overlays).addTo(vm.map);
      vm.controls.zoomControl = L.control.zoom().addTo(vm.map);

      /* Map Event Listeners */
      vm.map.on("click", function(event) {
        $log.info('click', event);
      });

      /* $scope Event Listeners */
      $scope.$on('$destroy', function() {
        vm.map.remove();
      });
      
      /* Expose Leaflet API to parent Controller */
      $scope.myLeaflet = vm.map;
    }
  })

.directive('myLeaflet', function myLeaflet() {
  var _id = 'my-leaflet';
  return {
    restrict: 'AE',
    scope: {
      myOptions: '=myOptions',
      myLeaflet: '=myLeaflet'
    },
    controller: 'MyLeafletCtrl',
    template: function(element, attributes) {
      var id = attributes.myLeaflet || _id;
      return '<div id="' + id + '" style="position:absolute;top:0;bottom:0;right:0;left:0;"></div>';
    },
    controllerAs: 'vm',
    link: function(scope, element, attributes, controller) {
      var id = attributes.myLeaflet || _id;
      controller.init(id);
    }
  };
});