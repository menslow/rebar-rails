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

  // this.resource("projects", { path: "/projects" }, function() {
  //   this.route('new');
  //   this.resource('project', { path: '/:id' }, function() {
  //     this.route('edit')
  //   });
  // })

});
