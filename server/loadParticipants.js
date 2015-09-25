Meteor.startup(function () {

  // seed position
  if(Participants.find().count === 0)
  {
    Participants.insert({
      name : 'Mr Andersson'
    });
    
    ParticipantPositions.insert({
      p_id: "1",
      position: "10,10"
    });
  }
});