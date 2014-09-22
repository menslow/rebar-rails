App.ProjectEditRoute = Ember.Route.extend({

  // Using our route hooks to set template properties
  activate: function() {
    this.controllerFor('project').set('isEditing', true)
  },

  deactivate: function() {
    this.controllerFor('project').set('isEditing', false)
  }

})