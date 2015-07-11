import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(link){
      var confirmed = confirm("Are you sure?");

      if (confirmed){
        return link.destroyRecord();
      } else {
        return false;
      }
    }
  }
});
