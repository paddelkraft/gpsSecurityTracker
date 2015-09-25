	
    // Following code is just for demo purpose
    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2-lat1);  // deg2rad below
      var dLon = deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }

	Meteor.setInterval(function() {
		var participants = Participants.find();
		for(var i=0;i<participants.count();i++){
			var participant = participants.fetch()[i];

			if(participant.status === undefined || participant.status == 'alarm')
				continue;

			var participantsPositions = ParticipantPositions.find({ participantId: participant._id }, {
				limit: 10,
				sort: { timeStamp: -1}
			}).fetch();

			if(participantsPositions.length == 0)
				continue;

		    if(participantsPositions === undefined)
		    	continue;

		    var count = participantsPositions.length;
		    var firstPosition = participantsPositions[0];
		    var lastPosition = participantsPositions[count - 1];
		   	var distance = getDistanceFromLatLonInKm(firstPosition.latitude, firstPosition.longitude, lastPosition.latitude, lastPosition.longitude);
		   	// console.log(firstPosition.latitude + " " + firstPosition.longitude + " " + lastPosition.latitude + " " + lastPosition.longitude + " " + distance);
		   	
		   	if(distance < 0.1){
		   		console.log('attention on ' + participant._id);
		   		Participants.update({'_id' : participant._id}, {$set:{status:'attention'}});
		   	}else{
		   		console.log('set normal on ' + participant._id);
		   		Participants.update({'_id' : participant._id}, {$set:{status:'normal'}});
		   	}
		}
	}, 1000);