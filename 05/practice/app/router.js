import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('links', { path: "/" }, function() {
    this.route('new', { path: "/links/new" });
  });
  this.route('login');
});
