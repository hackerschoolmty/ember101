import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      self = this;
      var identification = self.get("email") || "";
      var password = self.get("password") || "";

      self.get("model").set("email", identification);
      self.get("model").set("password", password);

      self.get("model").save().then(
        function(results){
          self.get("session").authenticate('simple-auth-authenticator:devise', {
            identification: identification, password: password
          });
        },
        function(error){
          alert(error);
        }
      );
    }
  }
});
