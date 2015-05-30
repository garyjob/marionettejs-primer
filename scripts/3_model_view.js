var ContactManager = new Marionette.Application();

// Declaration of new model
ContactManager.Contact = Backbone.Model.extend({
  defaults: {
    firstName: "Boomz BMV"
  }

});

// The view to display a model
ContactManager.ContactView = Marionette.ItemView.extend({
  template: "#contact-template",
});

// Setting up of the layout view
ContactManager.on("before:start", function(){

  console.log("before start");
  // Declarations of Region
  var RegionContainer = Marionette.LayoutView.extend({
    
    el: "#app-container",
    regions: {
      main: "#main-region"
    } 
  });

  ContactManager.regions = new RegionContainer();

});


// Displaying of the model view
ContactManager.on("start", function(){ 

  // Setting up of the model as well as its corresponding template
  var alice = new ContactManager.Contact({
    // firstName: "Alice", // Commented out to demonstrate defaults 
    lastName: "Arten",
    phoneNumber: "555-0184"
  });

  var aliceView = new ContactManager.ContactView({ 
    model: alice
  });

  // Replaces the entire content within the region with the Model View
  ContactManager.regions.main.show(aliceView);

});

ContactManager.start();