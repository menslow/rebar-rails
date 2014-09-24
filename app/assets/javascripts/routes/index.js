App.IndexRoute = Ember.Route.extend({

  setupController: function(controller, category) {
    controller.set( 'categories', this.store.find('category') );
  }

  //model: function() { return this.store.find('category') }
})