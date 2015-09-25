var isAlarm = false;

Template.alarm.rendered = function(){
    isAlarm = Session.get("isAlarmed");
};

Template.alarm.events({
    'click #btnAlarm': function () {
        if (isAlarm) {
            isAlarm = false;
            Session.set("isAlarmed", false);
            $('#btnAlarm').removeClass("alarmed");
            SetLocation();
        } else {
            isAlarm = true;
            Session.set("isAlarmed", true);
            $('#btnAlarm').addClass("alarmed");
            SetLocation();
        }

        console.log("Alarm status:" + isAlarm);
    }
});