// det andra teamet gör detta när de skapar en användare via admin

Template.viewparticipants.helpers({
  participants: function () {
    var participants = Participants.find({}, { sort: { status: 1 } }).fetch();

    participants.forEach(function(item){
      item.niceDateTime = new Date(item.timeStamp).toString('HH:mm:ss');
    });

    return participants;
  }
});