import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(friend) {
      var _this = this;

      friend.destroyRecord().then(function() {
        _this.transitionToRoute("friends.index");
      });
    }
  }
});
