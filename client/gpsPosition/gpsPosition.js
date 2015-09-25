Session.set('participant', 1);

var ParticipantPositionId;


Template.gpsPositionTest.helpers ({
    pos: function () {
        return ParticipantPositions.find();
    }
});

Template.gpsPositionTest.events ({
    'click button': function () {
        // persist position
        
    }
});



setInterval(function(){
    if(Session.get('participant')){
        getLocation();
    }
    
}, 1 * 1000)


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var etest = new Date().getTime();
    
    
    //x.innerHTML = "Latitude: " + position.coords.latitude + 
    //"<br>Longitude: " + position.coords.longitude;
    if(ParticipantPositions.find({ participantId: Session.get('participant') }).count() === 0){
        ParticipantPositions.insert({
            participantId : Session.get('participant'),
            latitude : position.coords.latitude,
            longitude : position.coords.longitude, 
            timeStamp : new Date().getTime(),   
            alarm: false
        }, function(err, insertedRecord){
            ParticipantPositionId = insertedRecord
        });
    }else{
        ParticipantPositions.update(ParticipantPositionId, 
                                { $set : 
                                 { 
                                    latitude : position.coords.latitude, 
                                    longitude : position.coords.longitude, 
                                    timeStamp : new Date().getTime()
                                 } 
                                })    
    }
}