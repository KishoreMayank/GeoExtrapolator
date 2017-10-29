var clim= "";
var geo = "";
var pop = "";
var locations = [];


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: -28.024, lng: 140.887}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    })});

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

function getPreferences() {
    clim = document.getElementById("Q1").value;
    geo = document.getElementById("Q2").value;
    pop = document.getElementById("Q3").value;

    if(clim === "Temperate" && geo === "Coastal" && pop === "Urban") {
        locations = [
            {lat: 47.5622, lng: 13.6493},
            {lat: 40.811550, lng: -73.946477},
            {lat: 40.811550, lng: -73.946477},
            {lat: -31.563910, lng: 147.154312},
            {lat: -33.718234, lng: 150.363181},
            {lat: -33.727111, lng: 150.371124},
            {lat: -33.848588, lng: 151.209834},
            {lat: -33.851702, lng: 151.216968},
            {lat: -34.671264, lng: 150.863657},
            {lat: -35.304724, lng: 148.662905},
            {lat: -36.817685, lng: 175.699196}
        ];
    }
    initMap();
}
/*
function getPreferences() {
    var obj = document.getElementById("Q1");
    document.getElementById("demo").innerHTML =
    obj.options[obj.selectedIndex].text;
}*/








