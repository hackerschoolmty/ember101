import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  actions: {
    authenticate: function(){
      var self = this

      var identification = self.get("identification") || "";
      var password = self.get("password") || "";

      self.get("session").authenticate('simple-auth-authenticator:devise', {
        identification: identification, password: password
      });
    }
  }
});
