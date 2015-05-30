var ContactManager = new Marionette.Application();

// The routing patterns
ContactManager.Router = Marionette.AppRouter.extend({

  // Listing of all the routes in this application
  appRoutes: {

    /** /marionette_test/5_routing_view.html#contacts **/
    "contacts": "listContacts",

    /** /marionette_test/5_routing_view.html#contacts/111 **/
    "contacts/:id": "showContact"
    
  }

});

// The functions that gets called when routing happens
var MyController = Marionette.Controller.extend({

  // The route that gets called when #contacts happens during initial pageload
  // Subsequent page loads does not trigger this function by default
  listContacts: function() { 
    console.log("This route has been called");
  },

  showContact: function(to_be_shown) {
    console.log("This route has been shown " + to_be_shown);
  }

})


// Setting up of the application
ContactManager.on("start", function(){ 

  console.log("start");

  // Mapping of the routes to the actual functions to be called
  // This time using the Controller
  var controller = new MyController();
  new ContactManager.Router({
    controller: controller
  });

  if(Backbone.history) {
    Backbone.history.start();
  }

  if( Backbone.history.fragment === "" ) {
    console.log("Changing the URL");
    Backbone.history.navigate("contacts"); // Pushes the Hash state to the browser URL
  }

});

ContactManager.start();