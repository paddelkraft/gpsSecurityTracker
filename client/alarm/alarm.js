var isAlarm = false;
/*
Template.alarmed.rendered = function(){
    Session.get(isAlarmed);
};*/

Template.alarm.events({
    'click #btnAlarm': function () {
        if (isAlarm) {
            isAlarm = false;
            Session.set("isAlarmed", isAlarm);
            $('#btnAlarm').removeClass("alarmed");
        } else {
            isAlarm = true;
            $('#btnAlarm').addClass("alarmed");
        }

        console.log("Alarm status:" + isAlarm);
    }
});