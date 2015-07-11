import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr("string"),
  link: DS.belongsTo("link"),
  user: DS.belongsTo("user")
});
