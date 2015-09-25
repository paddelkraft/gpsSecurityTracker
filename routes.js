Router.route('/');
Router.route('/home');
Router.route('/alarm');
Router.route('/viewparticipants');
Router.route('/map');

Router.configure({
    layoutTemplate: 'main'
});

Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['map'] });
