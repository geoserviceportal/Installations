'use strict';

angular.module('sbAdminApp').controller('ImagingCtrl', imagingCtrl);

/* @ngInject */
function imagingCtrl() {
    var vm = this;

}

require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/views/MapView",
    "esri/core/watchUtils",

    "dojo/dom",
    "dojo/on",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapToggle/BasemapToggleViewModel",
	"esri/widgets/Search",
      "esri/widgets/Search/SearchViewModel",
    "dojo/promise/all",
    "dojo/domReady!"
], function(Map, SceneView, MapView, watchUtils, dom,on,BasemapToggle, BasemapToggleVM,Search,
      SearchVM,  all) {

    //Create the 3d map
    var map3d = new Map({
        basemap: "hybrid"
    });

    //Create the 2d map
    var map2d = new Map({
        basemap: "topo"
    });

    //Create the SceneView for map3d
    var view3d = new SceneView({
        container: "view3dDiv",
        map: map3d,
        camera: {
            position: [7.654, 45.919, 5184],
            tilt: 80
        }
    });

    //Create the MapView for overview map
    var  view2d = new MapView({
        container: "view2dDiv",
        map: map2d
    });

    //Remove the default widgets
    view2d.ui.components = [];

    var extentDiv = dom.byId("extentDiv");
	
	 //////////////////////////////search//////////////////////
	  
	   var searchWidget = new Search({
        //Setting widget properties via viewModel is subject to 
        //change for the 4.0 final release  
        viewModel: new SearchVM({
          view: view3d
        })
      }, "searchDiv");

      searchWidget.startup();
	  
	  /////////////////////////////////////////end search ////////

    ///////////////////////////////////toggle//////////////////////

    var toggle1 = new BasemapToggle({
        //Setting widget properties via viewModel is subject to
        //change for the 4.0 final release
        viewModel: new BasemapToggleVM({
            view: view3d,
            secondaryBasemap: "topo"
        })
    }, "BasemapToggleDiv");

    toggle1.startup();
    //toggle2
    var toggle2 = new BasemapToggle({
        //Setting widget properties via viewModel is subject to
        //change for the 4.0 final release
        viewModel: new BasemapToggleVM({
            view: view2d,
            secondaryBasemap: "hybrid"
        })
    }, "BasemapToggleDiv2");

    toggle2.startup();

    //////////////////////////////////////////////// end toggle//////////////////////

    view2d.then(function() {
        // Update the overview extent whenever the 2d or 3d view extent changes
        view3d.watch("extent", updateOverviewExtent);
        view2d.watch("extent", updateOverviewExtent);

        // Update the minimap overview when the 3d view becomes stationary
        watchUtils.when(view3d, "stationary", updateOverview);

        var elevationLayers = map3d.basemap.elevationLayers.getAll();
        on(dom.byId("elevationInput"), "change", updateElevation);

        function updateElevation(ev) {
            if (!ev.target.checked) {
                // Clear all elevation layers
                map3d.basemap.elevationLayers.clear();
            } else {
                // Restore elevation layers to the original ones
                map3d.basemap.elevationLayers = elevationLayers;
            }
        }

        function updateOverview() {
            // Animate the 2d view to a zoomed-out scale so we get a nice overview.
            // We use the "progress" callback of the animateTo promise to update
            // the overview extent while animating
            view2d.animateTo({
                center: view3d.center,
                scale: view3d.scale * 2 * Math.max(view3d.width /
                    view2d.width,
                    view3d.height / view2d.height)

            });
        }

        function updateOverviewExtent() {
            // Update the overview extent by converting the 3d extent to the 2d view
            // screen coordinates and updating the extentDiv position.
            var extent = view3d.extent;

            var bottomLeft = view2d.toScreen(extent.xmin, extent.ymin);
            var topRight = view2d.toScreen(extent.xmax, extent.ymax);

            extentDiv.style.top = topRight.y + "px";
            extentDiv.style.left = bottomLeft.x + "px";

            extentDiv.style.height = (bottomLeft.y - topRight.y) + "px";
            extentDiv.style.width = (topRight.x - bottomLeft.x) + "px";
        }
    });
    /////////////////////////////////////////////// add the tilt function //////////////////////////
    var rotateAntiClockwiseSpan = dom.byId("rotateAntiClockwiseSpan");
    var rotateClockwiseSpan = dom.byId("rotateClockwiseSpan");
    var indicatorSpan = dom.byId("indicatorSpan");
    on(rotateClockwiseSpan, "click", function() {
        rotateView(-1);
    });
    on(rotateAntiClockwiseSpan, "click", function() {
        rotateView(1);
    });
    on(indicatorSpan, "click", tiltView);

    //Watch the change on view.camera
    view3d.watch("camera", updateIndicator);

    //Create the event's callback functions
    function rotateView(direction) {
        var heading = view3d.camera.heading;

        // Set the heading of the view to the closest multiple of 90 degrees,
        // depending on the direction of rotation
        if (direction > 0) {
            heading = Math.floor((heading + 1e-3) / 45) * 45 + 45;
        } else {
            heading = Math.ceil((heading - 1e-3) / 45) * 45 - 45;
        }

        view3d.animateTo({
            heading: heading
        });
    }

    function tiltView() {
        // Get the camera tilt and add a small number for numerical inaccuracies
        var tilt = view.camera.tilt + 1e-3;

        // Switch between 3 levels of tilt
        /*if (tilt >= 80) {
         tilt = 0;
         } else if (tilt <= 40) {
         tilt = 80;
         } else {
         tilt = 40;
         }*/

        view3d.animateTo({
            tilt:80 //tilt
        });
    }

    function updateIndicator(camera) {
        var tilt = camera.tilt;
        var heading = camera.heading;

        // Update the indicator to reflect the current tilt/heading using
        // css transforms.
        var transform = "rotateX(" + 0.8 * tilt +
            "deg) rotateY(0) rotateZ(" + -heading + "deg)";

        indicatorSpan.style["transform"] = transform;
        indicatorSpan.style["-webkit-transform"] = transform; //Solution for Safari
    }
    ///////////////////////////end tilt//////////////////////////////////////////////////
});
