import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    self = this;

    return self.store.createRecord("comment", {
      link: self.modelFor("links.show")
    });
  }
});
