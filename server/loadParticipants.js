Meteor.startup(function () {

    Participants.insert({
      name : 'Mr Andersson'
    });
    
    ParticipantPositions.insert({
      participantId: "1",
      latitude : "65",
      longitude : "24",
      timeStamp : "20150313T14:17:19",
      alarm : false
    });
});