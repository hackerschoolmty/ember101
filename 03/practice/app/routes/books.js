import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { name: "Book 1", score: 4 },
      { name: "Book 4", score: 2 },
      { name: "Book 5", score: 5 },
      { name: "Book 6", score: 7 }
    ];
  }
});
