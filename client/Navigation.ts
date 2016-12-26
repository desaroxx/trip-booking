import * as angular from 'angular';

angular.module('hello').component('navigation', {
  template: require('./Navigation.html') as string
});
