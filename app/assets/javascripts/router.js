// Get rid of the "#" in the uri
App.Router.reopen({
  location: 'auto',
  routURL: '/'
});

App.Router.map(function() {

  this.route("patterns", { path: "/patterns" });

  this.route("contact", { path: "/contact" });

  this.resource("projects", { path: "/projects" }, function() {
    this.route('new');
    this.resource('project', { path: '/:id' }, function() {
      this.route('edit')
    });
  })

});
