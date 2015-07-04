import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var self = this;

      this.get('model').save().then(function(friend) {
        self.transitionToRoute('friend', friend);
      });

      return false;
    }
  }
});
