import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord("article", {
      friend: this.modelFor("friends.show")
    });
  },

  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor("articles.new");
      var controller = this.controllerFor("articles/new");

      if (controller.get("isValid")) {
        model.save().then(function() {
          _this.transitionTo("articles");
        });
      } else {
        controller.set("errorMessage", "You have to fill all the fields");
      }
    },

    cancel: function() {
      this.transitionTo("articles");
    }
  }
});
