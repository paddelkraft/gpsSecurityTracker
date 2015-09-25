Meteor.startup(function () {

    Participants.insert({
      name : 'Mr Andersson'
    });
    
    ParticipantPositions.insert({
      participantId: "1",
      latitude : "65",
      longitude : "24",
      timeStamp : "2015-03-13T14:17:19",
      alarm : false
    });
});