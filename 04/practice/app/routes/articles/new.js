import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord("article", {
      friend: this.modelFor("friends.show")
    });
  }
});
