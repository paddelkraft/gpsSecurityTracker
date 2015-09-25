Template.home.events({
    'click #add' : function(){
        var d = new Date();
        var id = d.getTime();
        console.log(d + " " + id);

        var newParticipantName = $('#participantName').val();
        Participants.insert({ _id : id.toString(), name : newParticipantName }, function(err, record){
            Session.set("participant", record);
        });
        // Todo: route to map
        console.log("ID: " + id + " | Name: " + newParticipantName);
    }
});