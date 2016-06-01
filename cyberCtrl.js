'use strict';

angular.module('sbAdminApp').controller('CyberCtrl', cyberCtrl);

function cyberCtrl($http) {
    var vm = this;
	
	var index = 0;
	
	vm.center = {
		lat: 59.91,
		lng: 10.75,
		zoom: 12
	};
	
	vm.markers = {
		demo: {
			lat: 32.32,
			lng: 45.232,
			message: "hello world",
			focus: true,
			draggable: false
		}
	};
	
	vm.myinfo = false;
	vm.showG = true;
	
	vm.showT = false;
	vm.Thing = Thing;
	vm.showMap = false;
	vm.iot = iot;
	vm.ShowI = false;
	vm.Tera = Tera;
	vm.ShowTT = false;
	vm.Lumi = Lumi;
	vm.ShowL = false;
	vm.Ping = Ping;
	vm.ShowTTT = false;
	vm.ShowINF = false;
	vm.writeUs = writeUs;
	vm.ViewLinks = viewLinks;
	vm.txt = false;
	vm.vital = vital;
	vm.sendMail = sendMail;
	vm.links = false;
	vm.sampleTitle ="Click on one of the buttons above";
	activate()
	
	///////////

	
	function Ping() {
		vm.ShowTTT = !vm.ShowTTT;
		vm.showMap = false;
		vm.showT = false;
		vm.ShowI = false;
		vm.ShowTT = false;
		vm.ShowL = false;
		vm.showG = false;
		vm.myinfo = true;
		vm.txt = false;
		vm.links = false;
		vm.sampleTitle = "Tweetping";
		vm.sampleText = "displays tweets as they're posted in real time across the world. the site isn't necessarily an informational tool: it's more of a lean-back, enjoy the action sort of experience. after you open the webpage, public geolocated tweets are streamed in and a dot is placed on the map. these dots accumulate while you keep your browser window open, and charts on the bottom of the screen provide some information on how many tweets have come and gone in each region during that period.";
	}
	function Lumi(){
		vm.ShowL = !vm.ShowL;
		vm.showMap = false;
		vm.showT = false;
		vm.ShowI = false;
		vm.ShowTT = false;
		vm.ShowTTT = false;
		vm.showG = false;
		vm.myinfo = true;
		vm.txt = false;
		vm.links = false;
		vm.sampleTitle = "Luminous Flickr";
		vm.sampleText = "luminous cities explores how urban environments are described by the vast archives of image sharing networks. the project employs the last decade of flickr's geo-coded photos to depict how the myriad of individual contributors form contrasting pictures of the city, and how contemporary events have been documented. the interactive maps reveal different facets in the photos spatial and temporal content. animations of the photo data portray both the rhythms of human activity, and the large-scale changes and events that shape its history. thematic mappings of the photos tags and metadata shed light on political and social concerns. the traces of protests, riots, and occupations appear alongside the background hum of tourism and sightseeing.";
	}
	function Tera(){
		vm.ShowTT = !vm.ShowTT;
		vm.showMap = false;
		vm.showT = false;
		vm.ShowI = false;
		vm.ShowL = false;
		vm.ShowTTT = false;
		vm.showG = false;
		vm.txt = false;
		vm.myinfo = true;
		vm.links = false;
		vm.sampleTitle = "Terra Incognita";
		vm.sampleText = "terra incognita visualises how wikipedia has evolved over the last decade, mapping the geographic articles for over 50 languages. the maps highlight cultural biases, unexpected areas of focus, the overlaps between languages, and regions that are unique to a language.";
	}
	function iot(){
		vm.ShowI = !vm.ShowI;
		vm.showMap = false;
		vm.showT = false;
		vm.ShowTT = false;
		vm.ShowL = false;
		vm.ShowTTT = false;
		vm.showG = false;
		vm.txt = false;
		vm.myinfo = true;
		vm.links = false;
		vm.sampleTitle = "IOT";
		vm.sampleText = "The internet of things (iot) refers to the ever-growing network of physical objects that feature an ip address for internet connectivity, and the communication that occurs between these objects and other internet-enabled devices and systems. Examples of objects that can fall into the scope of internet of things include connected security systems, thermostats, cars, electronic appliances, lights in household and commercial environments, alarm clocks, speaker systems, vending machines and more.";
	}
	function Thing(){
		vm.showT = !vm.showT;
		vm.showMap = false;
		vm.ShowI = false;
		vm.ShowTT = false;
		vm.ShowL = false;
		vm.ShowTTT = false;
		vm.showG = false;
		vm.txt = false;
		vm.myinfo = true;
		vm.links = false;
		vm.sampleTitle = "Thingful";
		vm.sampleText = "thingful® is a search engine for the internet of things, providing a unique geographical index of connected objects around the world, including energy, radiation, weather, and air quality devices as well as seismographs, ibeacons, ships, aircraft and even animal trackers. thingful’s powerful search capabilities enable people to find devices, datasets and realtime data sources by geolocation across many popular internet of things networks, and presents them using a proprietary geospatial device data search ranking methodology, thingrank®.";
	}

	function writeUs(){
		vm.ShowINF = false;
		vm.showMap = false;
		vm.showT = false;
		vm.ShowI = false;
		vm.ShowTT = false;
		vm.ShowL = false;
		vm.ShowTTT = false;
		vm.showG = false;
		vm.myinfo = true;
		vm.links = false;
		vm.sampleTitle = "Please add a link you would like to add to the page list";
		vm.sampleText = "";
		vm.txt=true;
	}
	
	function viewLinks(){
		vm.showT = false;
		vm.ShowI = false;
		vm.ShowTT = false;
		vm.ShowL = false;
		vm.ShowTTT = false;
		vm.showG = false;
		vm.txt = false;
		vm.myinfo = true;
		vm.links = true;
		vm.sampleTitle = "Sites added by users"
		vm.sampleText = ""
		
	}
	function vital() {
		alert("Thank you for your contribution");
		
	}
	function sendMail() {
    var link = "mailto:me@yopmail.com"
             + "&subject=" + escape("Link Request")
             + "&body=" + escape(document.getElementById('txxt').value)
    ;

    window.location.href = link;
}
	function activate(){
		$http.get('app/cyber/data.json').then(function(data){	
			angular.forEach(data.data.result.places , function(item){	
				angular.forEach(item.bounding_box.coordinates , function(item){
					
					angular.forEach(item , function(innerItem){
						vm.markers['marker' + index] = {
									lat: innerItem[0],
									lng: innerItem[1],
									message: "hello world",
									focus: true,
									draggable: false
					};
					
					index++;
					
					console.log(vm.markers);
					});
						
				});
			});
		});
	}
}
