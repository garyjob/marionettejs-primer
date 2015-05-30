var ContactManager = new Marionette.Application();

// Declaration of new model
ContactManager.Contact = Backbone.Model.extend({
  defaults: {
    firstName: "Boomz BMV"
  }
});

// Declaration of new collection
ContactManager.ContactCollection = Backbone.Collection.extend({
  model: ContactManager.Contact
});

// The view to display a model
ContactManager.ContactItemView = Marionette.ItemView.extend({
  template: "#contact-template",  // Sets the default template
  tagName: "li", // Sets the default tag

  events: {
    "click p": "alertChangePhoneNumber"
  },

  alertChangePhoneNumber: function() {
    console.log("Changing of phone number");
    console.log(this.model);
    this.model.set("firstName", "what to do?")
  }

});


// The view to display a list of contacts
ContactManager.ContactsView = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: ContactManager.ContactItemView
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
  console.log("start");

  // Setting up of the model as well as its corresponding template
  var contacts = new ContactManager.ContactCollection([{
    firstName: "Bob",
    lastName: "Brigham",
    phoneNumber: "555-0163"
  }, {
    firstName: "Alice",
    lastName: "Arten",
    phoneNumber: "555-0184"
  }, {
    firstName: "Charlie",
    lastName: "Campbell",
    phoneNumber: "555-0129"
  } ])

  // Instantiation of a contact Collections View
  var contactsListView = new ContactManager.ContactsView({ 
    collection: contacts 
  });

  // Replaces the entire content within the region with the Collections View
  ContactManager.regions.main.show(contactsListView);

});

ContactManager.start();