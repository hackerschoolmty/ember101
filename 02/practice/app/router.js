import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route("posts", function(){
    this.route("postOne", { path: "/post-one"});
    this.route("postTwo", { path: "/post-two"});
  });
});
