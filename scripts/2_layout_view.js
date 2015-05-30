var ContactManager = new Marionette.Application();

ContactManager.StaticView = Marionette.ItemView.extend({
  template: "#static-template"
});

// Called to create the layout view
ContactManager.on("before:start", function(){
  console.log("before start");
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      main: "#main-region"
    } 
  });

  ContactManager.regions = new RegionContainer();
});

// Called upon instantiation
ContactManager.on("start", function(){
  console.log("start");

  // Replaces the contents within the region with contents within the template
  var staticView = new ContactManager.StaticView();
  ContactManager.regions.main.show(staticView);
});

ContactManager.start();