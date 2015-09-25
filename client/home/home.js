Template.main.events({
    'click #add' : function(){
        var d = new Date();
        var id = d.getTime();
        console.log(d + " " + id);

        var emptyPosition ={
            participantId: id.toString(),
            latitude : "0",
            longitude : "0",
            timeStamp : id,
            alarm : false
        };

        var newParticipantName = $('#participantName').val();
        Participants.insert({ _id : id.toString(), name : newParticipantName, lastPosition: emptyPosition }, function(err, record){
            Session.set("participant", record);
        });

        console.log("ID: " + id + " | Name: " + newParticipantName);

        Router.go('/map');
    }
});