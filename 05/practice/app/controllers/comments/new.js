import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      self = this;

      return this.get("model").save().then(
        function(results){
          self.transitionToRoute("comments.index");
        },
        function(error){
          alert(error);
        }
      );
    }
  }
});
