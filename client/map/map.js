/*var markers = {};

Participants.find().observe({  
  added: function(document) {
    // Create a marker for this document
    var marker = new google.maps.Marker({
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(document.latitude, document.longitude),
      map: map.instance,
      // We store the document _id on the marker in order 
      // to update the document within the 'dragend' event below.
      id: document._id
    });

    // This listener lets us drag markers on the map and update their corresponding document.
 //   google.maps.event.addListener(marker, 'dragend', function(event) {
 //     Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
 //   });

    // Store this marker instance within the markers object.
    markers[document._id] = marker;
  },
  changed: function(newDocument, oldDocument) {
    markers[newDocument._id].setPosition({ lat: newDocument.latitude, lng: newDocument.longitude });
  },
  removed: function(oldDocument) {
    // Remove the marker from the map
    markers[oldDocument._id].setMap(null);

    // Clear the event listener
    //google.maps.event.clearInstanceListeners(
    //  markers[oldDocument._id]);

    // Remove the reference to this marker instance
    delete markers[oldDocument._id];
  }
});

*/


Template.map.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(38.3409791, -0.4782319),
        zoom: 16
      };
    }
  }
});

Template.map.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
console.log("Starting");
    	Participants.find().forEach(function(document){
    		console.log("In for each");
	    	var marker = new google.maps.Marker({
	      		draggable: true,
	      		animation: google.maps.Animation.DROP,
	      		position: new google.maps.LatLng(document.latitude, document.longitude),
	      		map: map.instance,
		      // We store the document _id on the marker in order 
		      // to update the document within the 'dragend' event below.
	      		id: document._id
    		});
    	})


/*    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
*/


  });
});