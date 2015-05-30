var ContactManager = new Marionette.Application();

// This is the event that will get triggered when venting happens
ContactManager.vent.on("its_not_your_fault", function(param) {
  console.log(param);
})


// Setting up of the application
ContactManager.on("start", function(){ 

  var self = this;
  self.vent.trigger('its_not_your_fault', "I forgive myself!!!");

});

ContactManager.start();