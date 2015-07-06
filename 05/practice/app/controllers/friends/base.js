import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    "model.email",
    "model.firstName",
    "model.lastName",
    "model.twitter",

    function() {
      return !Ember.isEmpty(this.get("model.email")) &&
      !Ember.isEmpty(this.get("model.firstName")) &&
      !Ember.isEmpty(this.get("model.lastName")) &&
      !Ember.isEmpty(this.get("model.twitter"));
    }
  ),

  actions: {
    save: function(){
      if (this.get("isValid")) {
        this.set("errorMessage", "");

        var self = this;

        this.get("model").save().then(function(friend) {
          self.transitionToRoute('friends.show', friend);
        },
        function(error){
          alert(error);
        });

      } else {
        this.set("errorMessage", "You have to fill all the fields");
      }
      return false;
    },
  }
});
