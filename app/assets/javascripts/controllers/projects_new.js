App.ProjectsNewController = Ember.Controller.extend({

  actions: {

    createProject: function() {
      var self = this,
        fields = this.get('fields');

      if (App.Project.valid(fields)) {
        var project = this.store.createRecord('project', this.get('fields'));
        project.save().then(function(project) {
          self.transitionToRoute('project', project);
        });
      } else {
        this.set('showError', true)
      }
    }

  }

});