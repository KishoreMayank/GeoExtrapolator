var clim= "";
var geo = "";
var pop = "";
var locations = [];

function getPreferences() {
    clim = document.getElementById("Q1");
    geo = document.getElementById("Q2");
    pop = document.getElementById("Q3");

    if(clim === "Temperate" && geo === "Coastal" && pop === "Urban") {
        locations = [
            {lat: 47.5622, lng: 13.6493}
        ];
    }
}
/*
function getPreferences() {
    var obj = document.getElementById("Q1");
    document.getElementById("demo").innerHTML =
    obj.options[obj.selectedIndex].text;
}*/



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






