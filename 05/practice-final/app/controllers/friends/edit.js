import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var self = this; this.get('model').save().then(function(friend) {
        self.transitionToRoute('friend', friend);
      });

      return false;
    },

    cancel: function() {
      this.transitionToRoute('friend', this.get('model'));
      return false;
    }
  }
});
