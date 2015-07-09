import DS from 'ember-data';
import env from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  host: env.APP.apiBaseURL,
  namespace: "api"
});
