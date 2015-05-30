var ContactManager = new Marionette.Application();

// This is the event that will get triggered when venting happens
ContactManager.module("Boomz", function(Boomz) {

})

// Declaration of sub module
ContactManager.module("Boomz.BMV", function(BMV) {

})


// Setting up of the application
ContactManager.on("start", function(){ 

  var some_boomz = ContactManager.module('Boomz');
  console.log("some_boomz");
  console.log(some_boomz);

  // Method 1:  Calling sub module
  var some_other_boomz = ContactManager.module('Boomz.BMV');
  console.log("some_other_boomz");
  console.log(some_other_boomz);

  // Method 2:  Calling sub module
  var some_other_boomz_again = ContactManager.module('Boomz').BMV;
  console.log("some_other_boomz_again");
  console.log(some_other_boomz_again);

});

ContactManager.start();