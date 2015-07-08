import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord("friend");
  },

  deactivate: function() {
    var model = this.modelFor('friends/new');
    var controller = this.controllerFor('friends/new');
    controller.set("errorMessage", null);

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  }
});
