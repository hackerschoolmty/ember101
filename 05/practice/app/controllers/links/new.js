import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      self = this

      return self.get("model").save().then(
        function(results){
          self.transitionToRoute("links.index");
        },
        function(error){
          alert("error");
        }
      );
    }
  }
});
