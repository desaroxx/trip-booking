import * as angular from 'angular';

angular.module('hello').component('navigation', {
  template: `
    <ul>
      <li><a ui-sref="home">Home</a></li>
      <li><a ui-sref="wiki">Wiki</a></li>
    </ul>
  `
});
