'use strict';

angular.module('apiApp.auth', ['apiApp.constants', 'apiApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
