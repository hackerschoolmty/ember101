import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('friends', function() {
    this.route('new');
    this.route('edit', { path: ':friend_id/edit'});
  });

  this.route('friend', { path: 'friend/:friend_id' }, function(){
    this.route('articles');
  });
});
