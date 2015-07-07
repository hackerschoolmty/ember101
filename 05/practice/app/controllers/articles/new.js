import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      var self = this;

      this.get("model").save().then(function(results){
        self.transitionToRoute("friends");
      },
      function(error){
        alert(error);
      });

      return false;
    }
  }
});
