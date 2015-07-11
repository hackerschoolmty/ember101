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
  });
  this.route('login');
});
