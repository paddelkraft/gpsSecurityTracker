// det andra teamet gör detta när de skapar en användare via admin

Template.viewparticipants.helpers({
  participants: function () {
    var participants = Participants.find({}).fetch();
    for(var i=0; i< participants.length; i++){
      var par = participants[i];
      
      var participantsPos = ParticipantPositions.find({ participantId: par._id }).fetch()[0];
     
      if(participantsPos === undefined)
        continue;
      
      par.latitude = participantsPos.latitude;
      par.longitude = participantsPos.longitude;
      par.alarm = participantsPos.alarm;
      par.timeStamp = participantsPos.timeStamp;
    }
    
    return participants;
  }
});