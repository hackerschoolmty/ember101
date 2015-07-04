import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('friends', function() {
    this.route('new');
  });
  this.route('friend', { path: "friend" }, function(){
    this.route("index", { path: "/:friend_id" });
  });
});
