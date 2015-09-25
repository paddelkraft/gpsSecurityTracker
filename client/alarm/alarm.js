var isAlarm = false;

Template.alarm.rendered = function(){
    setAlarm(Session.get("isAlarmed"));
};

Template.alarm.events({
    'click #btnAlarm': function () {
        if (isAlarm) {
            setAlarm(false);
        } else {
            setAlarm(true);
        }

        console.log("Alarm status:" + isAlarm);
    }
});

var setAlarm  = function(isAlarmed){
    isAlarm = isAlarmed;
    Session.set("isAlarmed", isAlarmed);
    if(isAlarmed){
        $('#btnAlarm').addClass("alarmed");
    }
    else{
        $('#btnAlarm').removeClass("alarmed");
    }
    SetLocation();
};