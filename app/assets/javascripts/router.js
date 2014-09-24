// Get rid of the "#" in the uri
App.Router.reopen({
  location: 'auto',
  routURL: '/'
});

App.Router.map(function() {

  this.route("discover", { path: "/discover" });

  this.route("genres", { path: "/genres" });

  this.route("about", { path: "/about" });

  this.route("patterns", { path: "/patterns" });

  this.resource("categories", { path: "/categories" }, function() {
    this.route('new');
    this.resource('categories', { path: '/:id' }, function() {
      this.route('edit')
    });
  })

  this.resource("projects", { path: "/projects" }, function() {
    this.route('new');
    this.resource('projects', { path: '/:id' }, function() {
      this.route('edit')
    });
  })


});
