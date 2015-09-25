var ParticipantPositionId;

Template.main.helpers ({
    pos: function () {
        return ParticipantPositions.find();
    }
});

setInterval(function(){
    if(Session.get('participant')){
        getLocation();
    }
    
}, 10 * 1000)


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    if(Session.get('participant')){
        ParticipantPositions.insert({
            participantId : Session.get('participant'),
            latitude : position.coords.latitude,
            longitude : position.coords.longitude, 
            timeStamp : new Date().getTime(),   
            alarm: false
        });
    }
        
    }