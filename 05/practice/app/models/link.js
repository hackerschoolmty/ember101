import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  url: DS.attr("string"),
  comments: DS.hasMany("comment", { async: true })
});
