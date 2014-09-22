App.ProjectsController = Ember.ArrayController.extend({
  sortProperties: ['name'],

  projects: function() {
    return this.get('search') ? this.get('searchedProjects') : this
  }.property('search', 'searchedProjects'),

  searchedProjects: function() {
    var search = this.get('search').toLowerCase()
    return this.filter(function(project) {
      return project.get('fullName').toLowerCase().indexOf(search) != -1
    })
  }.property('search', 'this.@each.name')

})