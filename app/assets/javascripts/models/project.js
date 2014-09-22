App.Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  active: DS.attr('boolean', { defaultValue: true })
})