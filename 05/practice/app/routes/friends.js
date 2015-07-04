import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find("friend");
  },

  actions: {
    save: function(model){
      var self = this;

      model.save().then(function(friend) {
        self.transitionTo('friends.show', friend);
      },
      function(error){
        alert(error);
      });

      return false;
    },

    delete: function(friend) {
      var self = this;

      friend.destroyRecord().then(function() {
        self.transitionTo("friends.index");
      });

      return false;
    }
  }
});
