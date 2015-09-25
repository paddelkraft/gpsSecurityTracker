Meteor.startup(function () {

    Participants.insert({
      name : 'Mr Andersson'
    });
    
    ParticipantPositions.insert({
      participantId: "1",
      latitude : "65",
      longitude : "24",
      timeStamp : "1443184906",
      alarm : false
    });
});