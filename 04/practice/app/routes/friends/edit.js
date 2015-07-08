import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var model = this.modelFor('friends/edit');
    var controller = this.controllerFor('friends/edit');

    model.rollback();
    controller.set("errorMessage", null);
  }
});
