Template.home.events({
    'click #add' : function(){
        var d = new Date();
        var id = d.getTime();
        console.log(d + " " + id);

        var newParticipantName = $('#participantName').val();
        Participants.insert({ _id : id.toString(), name : newParticipantName });
        // Session.set("_ID", event.);
        // . Session.set("hideCompleted", event.target.checked); } })
        console.log("ID: " + id + " | Name: " + newParticipantName);
    }
});