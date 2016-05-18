'use strict';

angular.module('sbAdminApp').controller('ImagingCtrl', imagingCtrl);

function imagingCtrl() {
    var vm = this;
    var Raduis = 100;
    var layer;
    var chooseProb=1;// not work !!!
    $('#radiusSelect').val(100);
    $('#magnetiteSelect').val(6.8);
    var map = L.map('map').setView([32.111767, 34.801361], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.on('click', function(e) {
        switch(chooseProb){
            case 1:
            {

                loadXMLDocforEQ(map,e);//parse xml and put marker on map
                break;
            }
            case 2:
            {

                console.log('not emplemented');
                break;
            }
            case 3:
            {
                console.log('aaa');
                loadXMLDocforWH(map,e);//parse xml and put marker on map
                console.log('not emplemented');
                break;
            }
            default:
                console.log('error: probability not choose');

        }
    });

    $('#ResetMap').on('click',function(){ // reset map
        map.remove();
        chooseProb=1;
        $('#radiusSelect').val(100);
        $('#magnetiteSelect').val(7);
        map = L.map('map').setView([32.111767, 34.801361], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    });// delete all map layer & reset map

    $('#earthquakebtn').on('click',function(){ //reset map & show map and more
        $('#radiusSelect').val(100);
        $('#magnetiteSelect').val(6.8);
        allFormClose();
        document.getElementById('earthquakeForm').style.display= 'block';
        document.getElementById('map').style.display= 'block';
        map.remove();
        chooseProb=1; // set the api to EQ
        map = L.map('map').setView([32.111767, 34.801361], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        map.on('click', function(e) {
            loadXMLDocforEQ(map,e);//parse xml and put marker on map
        });
    });// delete all map layer & reset map for EQ

    $('#crimebtn').on('click',function(){ //reset map & show map and more
        allFormClose();
        document.getElementById('crime').style.display= 'block';
        document.getElementById('map').style.display= 'none';
    });// delete all map layer & reset map for EQ

    $('#weatherbtn').on('click',function(){ //reset map & show map and more
        allFormClose();
        document.getElementById('weatherForm').style.display= 'block';
        document.getElementById('map').style.display= 'block';
        map.remove();
        chooseProb=3; // set the api to weather

        map = L.map('map').setView([32.111767, 34.801361], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        map.on('click', function(e) {
            loadXMLDocforWH(map,e);//parse xml and put marker on map
        });
    });// delete all map layer & reset map for weather
}

function allFormClose() {
    document.getElementById('earthquakeForm').style.display= 'none';
    document.getElementById('weatherForm').style.display= 'none';
    document.getElementById('crime').style.display= 'none'
}
function loadXMLDocforWH(map,e) {
    var loc;
    var u = "http://api.openweathermap.org/data/2.5/weather?APPID=3976c02a714fa412bed57f7a86ebfae1&lat=" + e.latlng.lat + "&lon=" + e.latlng.lng;
    $.ajax({
        url: u,
        dataType: 'jsonp',
        xhrFields: {
            withCredentials: true
        }
    }).done(function (msg) {
        console.log(msg);
        loc = msg;//save the info for load the map and the marker

        //load map after read the api

        map.panTo(new L.LatLng(loc.coord.lat, loc.coord.lon));


        L.marker([loc.coord.lat, loc.coord.lon]).addTo(map)// point on map
            .bindPopup('weather in ' + loc.name + ' is ' + loc.weather[0].description)// text on popup
            .openPopup();
    });
}
function loadXMLDocforEQ(map,e) {
    var loc;
    var selectedText = $('#radiusSelect').find("option:selected").text();
    var selectmag=$('#magnetiteSelect').val();
    var u = "http://api.openhazards.com/GetEarthquakeProbability?q=" + e.latlng.lng + "%2C" + e.latlng.lat + "&m=" + selectmag + "&r=" + selectedText;
    $.ajax({
        url: u,
        dataType: 'jsonp',
        xhrFields: {
            withCredentials: true
        }
    }).done(function (msg) {
        loc = msg;//save the info for load the map and the marker

        //load map after read the api

        map.panTo(new L.LatLng(loc.location.lat, loc.location.lng));


        L.circleMarker([loc.location.lat, loc.location.lng]).addTo(map)// point on map
            .bindPopup('mag: ' + loc.forecast.mag + ' || probability: ' + loc.forecast.prob + '<br> rate:' + loc.forecast.rate)// text on popup
            .setRadius(loc.location.radius.value)
            .openPopup();
    });
}


