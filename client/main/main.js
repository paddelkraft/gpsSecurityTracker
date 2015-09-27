var ParticipantPositionId;

if(!Session.get('isAlarmed')){
    Session.set('isAlarmed', false)
}

Template.main.helpers ({
    pos: function () {
        return ParticipantPositions.find();
    }
});

setInterval(function(){
    if(Session.get('participant')){
        SetLocation();
    }
    
}, 10 * 1000)


SetLocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function setPosition(position) {
    if(Session.get('participant')){
        var participantId = Session.get('participant');
        
        var position = {
            participantId : participantId,
            latitude : position.coords.latitude,
            longitude : position.coords.longitude, 
            timeStamp : new Date().getTime(),   
            alarm: Session.get('isAlarmed')
        };
        ParticipantPositions.insert(position);
        
        var participant = Participants.find(participantId);
        participant.lastPosition = position;
        if(Session.get('isAlarmed')){
            participant.status = "Alarm";
        }else{
           participant.status = "Normal";
        }
        Participants.update(participantId, 
        {
            $set : 
            { 
                lastPosition: position
            }
        });
    }
        
    }