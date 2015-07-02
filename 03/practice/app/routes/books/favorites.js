import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor("books");
  },

  renderTemplate: function() {
    this.render("books");
  }
});
