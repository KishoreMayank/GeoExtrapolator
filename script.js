var clim= "";
var geo = "";
var pop = "";
var locations =  [];

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

    if(pop === "Urban") {
        if (clim === "Hot") {
            if(geo === "Valley") {
                locations = [{lat: 24.861462, lng: 67.009939}];
            } else if (geo === "Coastal") {
                locations = [
                    {lat: -23.550520, lng: -46.633309},
                    {lat: -4.441931, lng: 15.266293},
                    {lat :-6.175110, lng: 106.865039},
                    {lat: -12.046373, lng: -77.042754},
                    {lat: -22.906847, lng:  -43.172896},
                    {lat: 13.756331, lng: 100.501765},
                    {lat: 31.200092, lng: 29.918739},
                    {lat: 34.052234, lng: -118.243685},
                    {lat: -34.603684, lng: -58.381559}];
            } else if (geo === "Mountainous") {
                locations = [
                    {lat: 31.230390, lng: 121.473702},
                    {lat: 28.704059, lng: 77.102490},
                    {lat: 23.810332, lng: 90.412518},
                    {lat: 23.129110, lng: 113.264385},
                    {lat: 4.710989, lng: -74.072092}];
            } else if (geo === "Flatland") {
                locations = [
                    {lat: 39.904200, lng: 116.407396},
                    {lat: 19.075984, lng: 72.877656},
                    {lat: 41.008238, lng: 28.978359},
                    {lat: 12.971599, lng: 77.594563},
                    {lat: 29.431586, lng: 106.912251},
                    {lat: 31.554606, lng: 74.357158},
                    {lat: 10.823099, lng: 106.629664},
                    {lat: 17.385044, lng: 78.486671},
                    {lat: 13.082680, lng: 80.270718},
                    {lat: 23.022505, lng: 72.571362},
                    {lat: 22.307159, lng: 73.181219},
                    {lat: 33.448890, lng: -70.669265},
                    {lat: 40.416775, lng: -3.703790},
                    {lat: 25.204849, lng: 55.270783}];
            }
        } else if (clim === "Temperate") {
            if(geo === "Valley") {
                locations = 5;
            } else if (geo === "Coastal") {
                locations = [
                    {lat: 6.524379, lng: 3.379206},
                    {lat: 35.689487, lng: 139.691706},
                    {lat: 52.520007, lng: 13.404954},
                    {lat: 41.902783, lng: 12.496366},
                    {lat: 37.774929, lng: -122.419416}];

            } else if (geo === "Mountainous") {
                locations = 5;
            } else if (geo === "Flatland") {
                locations = [
                    {lat: 37.566535, lng: 126.977969},
                    {lat: 51.507351, lng: -0.127758}];
            }
        } else if (clim === "Cold") {
            if(geo === "Valley") {
                locations = 5;
            } else if (geo === "Coastal") {
                locations = [
                    {lat: 40.712775, lng: -74.005973},
                    {lat: 43.653226, lng: -79.383184},
                    {lat: 41.878114, lng: -87.629798}];
            } else if (geo === "Mountainous") {
                locations = [{lat: 55.755826, lng: 37.617300}];
            } else if (geo === "Flatland") {
                locations = 5;
            }
        }
    } else if (pop === "Suburban") {
        if (clim === "Hot") {
            if(geo === "Valley") {
                locations = [
                    {lat: 37.555782, lng: 22.333777}];
            } else if (geo === "Coastal") {
                locations = [
                    {lat: 33.895006, lng: 35.513575},
                    {lat: 32.056442, lng: 34.772238}];
            } else if (geo === "Mountainous") {
                locations = [
                    {lat: 34.117290, lng: -118.261433},
                    {lat: -23.555000, lng: -46.655278}];
            } else if (geo === "Flatland") {
                locations = [
                    {lat: 41.414117, lng: -73.303565},
                    {lat: 19.439252, lng: -99.163605},
                    {lat: 1.287081, lng: 103.828554},
                    {lat: 30.214260, lng: -97.769410},
                    {lat: 29.951066, lng: -90.071532},
                    {lat: -4.295585, lng: 15.245811},
                    {lat: 25.804244, lng: -80.198919}];
            }
        } else if (clim === "Temperate") {
            if(geo === "Valley") {
                locations = 5;
            } else if (geo === "Coastal") {
                locations = [
                    {lat: 40.811550, lng: -73.946477},
                    {lat: 41.379716, lng: 2.168184},
                    {lat: 37.759865, lng: -122.414798},
                    {lat: 22.279991, lng: 114.158798}];
            } else if (geo === "Mountainous") {
                locations = [{lat: 37.977972, lng: 23.742996}];
            } else if (geo === "Flatland") {
                locations = [
                    {lat: 38.909706, lng: -77.065357},
                    {lat: 39.963692, lng:-75.139944},
                    {lat: 33.764387, lng: -84.349604},
                    {lat: 35.635367, lng: 139.699888},
                    {lat: 37.270702, lng: -76.707457},
                    {lat: -33.886111, lng: 151.211111},
                    {lat: 43.645509, lng: -79.412331},
                    {lat: 37.558843, lng: 126.929558},
                    {lat: 40.811550, lng: -73.946477},
                    {lat: 60.161723, lng: 24.936413},
                    {lat: 37.524124, lng: 127.022883},
                    {lat: 48.858703, lng: 2.358804},
                    {lat: 40.723301, lng:-74.002988},
                    {lat: 35.671628, lng: 139.710285}];
            }
        } else if (clim === "Cold") {
            if(geo === "Valley") {
                locations = 5;
            } else if (geo === "Coastal") {
                locations = [
                    {lat: 52.373030, lng: 4.940774},
                    {lat: 55.663895, lng: 12.542540},
                    {lat: 52.371720, lng: 4.902073},
                    {lat: 41.908803, lng: -87.679598}];

            } else if (geo === "Mountainous") {
                locations = [{lat: 59.312527, lng: 18.061619}];
            } else if (geo === "Flatland") {
                locations = [
                    {lat: 42.330528, lng: -83.067010},
                    {lat: 51.474191, lng: -0.069137},
                    {lat: 60.184287, lng: 24.949273},
                    {lat: 51.547623, lng: -0.070113},
                    {lat: 51.517870, lng: -0.210328},
                    {lat: 49.282808, lng: -123.106688}];
            }
        }
    } else if (pop === "Rural") {
        if (clim === "Cold") {
            if(geo === "Valley") {
                locations = [
                    {lat: 44.465433, lng: -72.687402},
                    {lat: 43.479929, lng: -110.762428},
                    {lat: 43.680740, lng: -114.363662},
                    {lat: 39.481654, lng: -106.038352}];
            } else if (geo === "Coastal") {
                locations = [
                    {lat: 67.9324, lng: 13.0887},
                    {lat: 41.354266, lng: -71.966462},
                    {lat: 57.053056, lng: 135.330000}];
            } else if (geo === "Mountainous") {
                locations = [{lat: -45.031162, lng: 168.662644}];
            } else if (geo === "Flatland") {
                locations = [
                    {lat: 51.758808, lng:-1.830775},
                    {lat: 41.931829, lng: -73.907437},
                    {lat: 43.331691, lat: -83.738019}];
            }
        } else if (clim === "Hot") {
            if(geo === "Valley") {
                locations = 5;
            } else if (geo === "Coastal") {
                locations = [
                    {lat:35.8412, lng:14.5393},
                    {lat:44.1116, lng:9.7339},
                    {lat: -13.380260, lng:-38.912536},
                    {lat:32.431581, lng:-80.669829}];

            } else if (geo === "Mountainous") {
                locations = [{lat:34.526147, lng:-83.984395}];
            } else if (geo === "Flatland") {
                locations =  [
                    {lat:35.895554, lng:-86.997879},
                    {lat:36.709833, lng: -81.977348},
                    {lat:30.309462, lng:-104.020623}];
            }
        } else if (clim === "Temperate") {
            if(geo === "Valley") {
                locations = [
                    {lat:48.0794, lng:7.3585},
                    {lat:46.3683, lng:14.1146},
                    {lat:45.899247, lng:6.129384},
                    {lat:38.643056, lng:34.828889},
                    {lat:47.596233, lng:-120.661476},
                    {lat:33.260042, lng:103.918599},
                    {lat:36.256577, lng:136.902736}];
            } else if (geo === "Coastal") {
                locations =  [{lat:36.555239, lng:-121.923288}];
            } else if (geo === "Mountainous") {
                locations = [
                    {lat:48.7904, lng:11.4979},
                    {lat:47.5622, lng:13.6493},
                    {lat:40.243128, lng:-79.237532}];
            } else if (geo === "Flatland") {
                locations = [
                    {lat:-39.272254, lng:-71.977628},
                    {lat:38.641185, lng: -83.744365},
                    {lat:42.416674, lng:-90.429017}];
            }
        }
    }
    if(locations === 5) {
        alert("Sorry, but weather like that just doesn't exist :(");
    } else if (locations.length === 0){
        alert("Please enter the remaining fields");
    } else {
        alert("Please look at the locations below");
    }
    initMap();
}

