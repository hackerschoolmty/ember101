import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(friend) {
      friend.destroyRecord();
      return false;
    }
  }
});
