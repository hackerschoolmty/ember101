/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'practice',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    "simple-auth": {
      authorizer: 'simple-auth-authorizer:devise',
      routeAfterAuthentication: 'links',
      routeIfAlreadyAuthenticated: 'links'
    },

    "simple-auth-devise": {
      resourceName: 'session',
      tokenAttributeName: 'token',
      identificationAttributeName: 'email'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.apiBaseURL = 'http://localhost:5000';

    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://localhost:5000"
    };

    ENV["simple-auth"].crossOriginWhitelist = [ENV.APP['apiBaseURL']];
    ENV["simple-auth-devise"].serverTokenEndpoint = ENV.APP['apiBaseURL'] + '/api/sessions';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.APP.apiBaseURL = 'https://staging-hsnews.herokuapp.com';

    ENV["simple-auth"].crossOriginWhitelist = [ENV.APP['apiBaseURL']];
    ENV["simple-auth-devise"].serverTokenEndpoint = ENV.APP['apiBaseURL'] + '/api/sessions';
  }

  if (environment === 'production') {
    ENV.APP.apiBaseURL = 'https://production-hsnews.herokuapp.com';

    ENV["simple-auth"].crossOriginWhitelist = [ENV.APP['apiBaseURL']];
    ENV["simple-auth-devise"].serverTokenEndpoint = ENV.APP['apiBaseURL'] + '/api/sessions';
  }

  return ENV;
};
