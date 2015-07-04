import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      self = this;

      this.get("model").save().then(function(friend) {
        self.transitionToRoute('friends');
      },
      function(error){
        alert(error);
      });

      return false;
    },

    cancel: function(){
      this.transitionToRoute('friends');
      return false;
    }
  }
});
