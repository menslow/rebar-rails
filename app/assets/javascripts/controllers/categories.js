App.CategoriesController = Ember.ArrayController.extend({
  sortProperties: ['name'],

  categories: function() {
    return this.get('search') ? this.get('searchedCategories') : this
  }.property('search', 'searchedCategories'),

  searchedCategories: function() {
    var search = this.get('search').toLowerCase()
    return this.filter(function(category) {
      return category.get('name').toLowerCase().indexOf(search) != -1
    })
  }.property('search', 'this.@each.name')

})