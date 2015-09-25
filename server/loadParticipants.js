Meteor.startup(function () {

  // seed position
  if(Participants.find().count === 0)
  {
    Participants.insert({
      _id : 1,
      name : 'Mr Andersson'
    });
    
    ParticipantPositions.insert({
      id: 0,
      participant_id: "1",
      latitude : "65",
      longitude : "24",
      timestamp : "20150313T14:17:19",
      alarm : false
    });
  }
});