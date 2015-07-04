import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function(){
      this.transitionToRoute('friends.show', this.get("model"));
      return false;
    }
  }
});
