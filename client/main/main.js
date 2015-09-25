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
        
        var participantId = Session.get('participant');
        
        var position = {
            participantId : participantId,
            latitude : position.coords.latitude,
            longitude : position.coords.longitude, 
            timeStamp : new Date().getTime(),   
            alarm: false
        };
        ParticipantPositions.insert(position);
        
        var participant = Participants.find(participantId);
        participant.lastPosition = position;

        Participants.update(participantId, 
        {
            $set : 
            { 
                lastPosition: position
            }
        });
    }
}