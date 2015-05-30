var TestManager = new Marionette.Application();

// Declaration of new view
TestManager.StaticView = Marionette.ItemView.extend({
    el: "#main-region",
    template: "#static-template"
});

// This function is for starting a new application
TestManager.on("start", function() {

  // Binds the pre-defined region with the view
  // replaces the contents within the region with contents from from the template
  var staticView = new TestManager.StaticView();
  staticView.render();

})

TestManager.start();