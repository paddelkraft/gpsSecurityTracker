Meteor.startup(function () {

// seed position
if(Participants.find().count === 0)
{
  Participants.insert({
    name : 'Mr Andersson'
  });
}

  // seed data
  //Todos.remove({});

//   if(Todos.find().count() === 0){
//     
//     Todos.insert({
//       name : 'First todo'
//     });
// 
//     
//   }
  // code to run on server at startup
});