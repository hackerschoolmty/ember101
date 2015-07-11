import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('links', function() {
    this.route('index', { path: "/" });
    this.route('new');
    this.route('edit', { path: ":link_id/edit" });
    this.route('show', { path: ":link_id" }, function(){
      this.resource("comments", function(){
        this.route("new");
      });
    });
  });
  this.route('login');
  this.resource('user', function() {});

  this.route('users', function() {
    this.route('new');
  });
});
