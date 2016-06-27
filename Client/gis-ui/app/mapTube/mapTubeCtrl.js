'use strict';

/*
    Leaflet piece
*/

//iowa
var mymap = L.map('mapid').setView([41.920, -94.512], 7);
var baseOptions = {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets',
	accessToken : 'pk.eyJ1IjoibGV2aW5pbCIsImEiOiJjaW1yc2loY2gwMDR4dzhtMnFudnc5ZG43In0.lgATkMfc7Gjup72-E2xayw'
};
var baseLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', baseOptions).addTo(mymap);
var wmsOptions = { layers: 'ne:ne' };
var wmsURL = 'http://demo.opengeo.org/geoserver/ows?';
var wmsLayer = undefined;
var oldLayer = undefined;
var isShown = false;

var toggleOverlay = function() {
    if (isShown) {
        console.log('Overlay shown');
        mymap.removeLayer(oldLayer);
    }
    wmsLayer = L.tileLayer.wms(wmsURL, wmsOptions);
    mymap.addLayer(wmsLayer);
    isShown = true;
};

/*
    AngularJs main controller 
*/

angular
    .module('appDispLayer', ['wms-module'])
    .controller('WMSServersController', function ($scope) {
        $scope.servers = servers;
        $scope.layers = [];
        $scope.model = {};
        $scope.serverUpdate = function () {
            console.log("Debug " + $scope.model.selectedServer);
            $scope.layers = $scope.selectedServer.layers;
        };

	$scope.loadWMSLayer = function () {
		if (isShown) {
			oldLayer = wmsLayer;
		}
		wmsURL = $scope.selectedServer.url + '?';
		wmsOptions.layers = $scope.selectedLayer.name;
	};
});

var servers = [
		{
			title : "OpenGeo",
			url : "http://demo.opengeo.org/geoserver/ows",
			getCapabilities : '?service=wms&version=1.3.0&request=GetCapabilities',
			layers : [
				{
					name : "maps:dark",
					title : "Dark Base Map",
					crs : "EPSG:4326"
				},
				{
					name : "ne:ne",
					title : "Natural Earth Base Map",
					crs : "EPSG:4326"
				},
				{
					name : "ne:NE1_HR_LC_SR_W_DR",
					title : "Natural Earth 1",
					crs : "EPSG:4326"
				}
			]
		},
		{
			title : "Iowa Precipitation ",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/iowa/rainfall.cgi",
			layers : [
			]
		},
		{
			title : "MRMS Q3 Precipitation",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms.cgi",
			layers : [
			]
		},
		{
			title : "CONUS GOES Infrared Satellite",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/conus_ir.cgi",
			layers : [
                {
                    name : "goes_conus_ir",
                    title : "IEM GOES IR WMS Service",
                    crs : "EPSG:4326"
                }
			]
		},
		{
			title : "CONUS GOES Visible Satellite",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/conus_vis.cgi",
			layers : [
			]
		},
		{
			title : "GOES East infrared imagery",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/east_ir.cgi",
			layers : [
			]
		},
		{
			title : "GOES West infrared imagery",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/west_ir.cgi",
			layers : [
			]
		},
		{
			title : "GOES East visible imagery",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/east_vis.cgi",
			layers : [
			]
		},
		{
			title : "GOES West visible imagery",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/goes/west_vis.cgi",
			layers : [
			]
		},
		{
			title : "CONUS NEXRAD Base Reflectivity (n0q)",
			url : "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi",
			layers : [
			]
		}
    ];

var categories = [
        {
            title: "Physical data",
            subcats: [
                {
                    title: "Oceanography",
                    description: "Land and Ocean"
                },
                {
                    title: "Meteorology",
                    description: "Weather and Climate"
                },
                {
                    title: "Hydrology",
                    description: ""
                },
                {
                    title: "Geology",
                    description: ""
                },
                {
                    title: "Geomorphology",
                    description: ""
                },
                {
                    title: "Land",
                    description: ""
                },
                {
                    title: "Landscape forms",
                    description: ""
                },
                {
                    title: "Topography",
                    description: ""
                },
                {
                    title: "Hazards",
                    description: ""
                },
                {
                    title: "Ecology",
                    description: ""
                },
                {
                    title: "Flora",
                    description: ""
                },
                {
                    title: "Fauna",
                    description: ""
                }
            ]
        },
        {
            title: "Human data",
            subcats: [
                {
                    title: "Population",
                    description: ""
                },
                {
                    title: "Society",
                    description: ""
                },
                {
                    title: "Health",
                    description: ""
                },
                {
                    title: "Religion",
                    description: ""
                },
                {
                    title: "History",
                    description: ""
                },
                {
                    title: "Academy",
                    description: ""
                },
                {
                    title: "Education",
                    description: ""
                },
                {
                    title: "Science",
                    description: ""
                },
                {
                    title: "Music",
                    description: ""
                },
                {
                    title: "Sports",
                    description: ""
                },
                {
                    title: "Finance",
                    description: ""
                },
                {
                    title: "Banking",
                    description: ""
                },
                {
                    title: "Trade",
                    description: ""
                },
                {
                    title: "Business",
                    description: ""
                },
                {
                    title: "Markets",
                    description: ""
                },
                {
                    title: "Companies",
                    description: ""
                },
                {
                    title: "Government",
                    description: ""
                },
                {
                    title: "Law",
                    description: "Law and order"
                },
                {
                    title: "Administration",
                    description: ""
                },
                {
                    title: "Human Rights",
                    description: ""
                },
                {
                    title: "Milsec",
                    description: "Military and security"
                },
                {
                    title: "Globalisation",
                    description: ""
                },
                {
                    title: "Agriculture",
                    description: ""
                },
                {
                    title: "Food",
                    description: ""
                },
                {
                    title: "Energy",
                    description: ""
                },
                {
                    title: "Resources",
                    description: ""
                },
                {
                    title: "Oil",
                    description: ""
                },
                {
                    title: "Fuel",
                    description: ""
                },
                {
                    title: "Gas",
                    description: ""
                },
                {
                    title: "Electricity",
                    description: ""
                },
                {
                    title: "Nuclear",
                    description: ""
                },
                {
                    title: "Technology",
                    description: ""
                },
                {
                    title: "Industry",
                    description: ""
                },
                {
                    title: "Transportation",
                    description: ""
                },
                {
                    title: "Aviation",
                    description: ""
                },
                {
                    title: "Maritime",
                    description: ""
                },
                {
                    title: "Tourist",
                    description: ""
                },
                {
                    title: "Logistics",
                    description: ""
                },
                {
                    title: "Bridges",
                    description: ""
                },
                {
                    title: "Tunnels",
                    description: ""
                },
                {
                    title: "Dams",
                    description: ""
                },
                {
                    title: "Structures",
                    description: ""
                },
                {
                    title: "Archeology",
                    description: ""
                }
            ]
        },
        {
            title: "Country",
            subcats: [
                {title: "Albania"},
                {title: "Algeria"},
                {title: "Andorra"},
                {title: "Angola"},
                {title: "Antigua and Barbuda"},
                {title: "Argentina"},
                {title: "Armenia"},
                {title: "Aruba"},
                {title: "Australia"},
                {title: "Austria"},
                {title: "Azerbaijan"},
                {title: "Bahamas, The"},
                {title: "Bahrain"},
                {title: "Bangladesh"},
                {title: "Barbados"},
                {title: "Belarus"},
                {title: "Belgium"},
                {title: "Belize"},
                {title: "Benin"},
                {title: "Bermuda"},
                {title: "Bhutan"},
                {title: "Bolivia"},
                {title: "Bosnia and Herzegovina"},
                {title: "Botswana"},
                {title: "Brazil"},
                {title: "Brunei"},
                {title: "Bulgaria"},
                {title: "Burkina Faso"},
                {title: "Burma"},
                {title: "Burundi"},
                {title: "Cabo Verde"},
                {title: "Cambodia"},
                {title: "Cameroon"},
                {title: "Canada"},
                {title: "Cayman Islands"},
                {title: "Central African Republic"},
                {title: "Chad"},
                {title: "Chile"},
                {title: "China"},
                {title: "Colombia"},
                {title: "Comoros"},
                {title: "Congo, Democratic Republic of the"},
                {title: "Congo, Republic of the"},
                {title: "Costa Rica"},
                {title: "Cote dIvoire"},
                {title: "Croatia"},
                {title: "Cuba"},
                {title: "Curacao"},
                {title: "Cyprus"},
                {title: "Czech Republic"},
                {title: "Denmark"},
                {title: "Djibouti"},
                {title: "Dominica"},
                {title: "Dominican Republic"},
                {title: "Ecuador"},
                {title: "Egypt"},
                {title: "El Salvador"},
                {title: "Equatorial Guinea"},
                {title: "Eritrea"},
                {title: "Estonia"},
                {title: "Ethiopia"},
                {title: "Fiji"},
                {title: "Finland"},
                {title: "France"},
                {title: "Gabon"},
                {title: "Gambia, The"},
                {title: "Georgia"},
                {title: "Germany"},
                {title: "Ghana"},
                {title: "Greece"},
                {title: "Grenada"},
                {title: "Guatemala"},
                {title: "Guinea"},
                {title: "Guinea-Bissau"},
                {title: "Guyana"},
                {title: "Haiti"},
                {title: "Holy See"},
                {title: "Honduras"},
                {title: "Hong Kong"},
                {title: "Hungary"},
                {title: "Iceland"},
                {title: "India"},
                {title: "Indonesia"},
                {title: "Iran"},
                {title: "Iraq"},
                {title: "Ireland"},
                {title: "Israel"},
                {title: "Italy"},
                {title: "Jamaica"},
                {title: "Japan"},
                {title: "Jordan"},
                {title: "Kazakhstan"},
                {title: "Kenya"},
                {title: "Kiribati"},
                {title: "Kosovo"},
                {title: "Kuwait"},
                {title: "Kyrgyzstan"},
                {title: "Laos"},
                {title: "Latvia"},
                {title: "Lebanon"},
                {title: "Lesotho"},
                {title: "Liberia"},
                {title: "Libya"},
                {title: "Liechtenstein"},
                {title: "Lithuania"},
                {title: "Luxembourg"},
                {title: "Macau"},
                {title: "Macedonia"},
                {title: "Madagascar"},
                {title: "Malawi"},
                {title: "Malaysia"},
                {title: "Maldives"},
                {title: "Mali"},
                {title: "Malta"},
                {title: "Marshall Islands"},
                {title: "Mauritania"},
                {title: "Mauritius"},
                {title: "Mexico"},
                {title: "Micronesia"},
                {title: "Moldova"},
                {title: "Monaco"},
                {title: "Mongolia"},
                {title: "Montenegro"},
                {title: "Morocco"},
                {title: "Mozambique"},
                {title: "Namibia"},
                {title: "Nauru"},
                {title: "Nepal"},
                {title: "Netherlands"},
                {title: "Netherlands Antilles"},
                {title: "New Zealand"},
                {title: "Nicaragua"},
                {title: "Niger"},
                {title: "Nigeria"},
                {title: "North Korea"},
                {title: "Norway"},
                {title: "Oman"},
                {title: "Pakistan"},
                {title: "Palau"},
                {title: "Panama"},
                {title: "Papua New Guinea"},
                {title: "Paraguay"},
                {title: "Peru"},
                {title: "Philippines"},
                {title: "Poland"},
                {title: "Portugal"},
                {title: "Qatar"},
                {title: "Romania"},
                {title: "Russia"},
                {title: "Rwanda"},
                {title: "Saint Kitts and Nevis"},
                {title: "Saint Lucia"},
                {title: "Saint Vincent and the Grenadines"},
                {title: "Samoa"},
                {title: "San Marino"},
                {title: "Sao Tome and Principe"},
                {title: "Saudi Arabia"},
                {title: "Senegal"},
                {title: "Serbia"},
                {title: "Seychelles"},
                {title: "Sierra Leone"},
                {title: "Singapore"},
                {title: "Sint Maarten"},
                {title: "Slovakia"},
                {title: "Slovenia"},
                {title: "Solomon Islands"},
                {title: "Somalia"},
                {title: "South Africa"},
                {title: "South Korea"},
                {title: "South Sudan"},
                {title: "Spain"},
                {title: "Sri Lanka"},
                {title: "Sudan"},
                {title: "Suriname"},
                {title: "Swaziland"},
                {title: "Sweden"},
                {title: "Switzerland"},
                {title: "Syria"},
                {title: "Taiwan"},
                {title: "Tajikistan"},
                {title: "Tanzania"},
                {title: "Thailand"},
                {title: "Timor-Leste"},
                {title: "Togo"},
                {title: "Tonga"},
                {title: "Trinidad and Tobago"},
                {title: "Tunisia"},
                {title: "Turkey"},
                {title: "Turkmenistan"},
                {title: "Tuvalu"},
                {title: "Uganda"},
                {title: "Ukraine"},
                {title: "United Arab Emirates"},
                {title: "United Kingdom"},
                {title: "Uruguay"},
                {title: "Uzbekistan"},
                {title: "Vanuatu"},
                {title: "Venezuela"},
                {title: "Vietnam"},
                {title: "Yemen"},
                {title: "Zambia"},
                {title: "Zimbabwe"}
            ]
        }
    ];
