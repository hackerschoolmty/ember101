import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find("friend");
  },

  actions: {
    delete: function(friend) {
      var self = this;

      friend.destroyRecord().then(function() {
        self.transitionTo("friends.index");
      });

      return false;
    }
  }
});
