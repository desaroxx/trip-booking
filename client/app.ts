require('./css/Main.scss');

import 'angular';
import 'angular-ui-router';

import * as angular from 'angular';
import { Sample } from './Sample';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

const MODULE_NAME = 'hello';

angular.module(MODULE_NAME, ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    (
      $stateProvider: IStateProvider,
      $urlRouterProvider: IUrlRouterProvider,
      $locationProvider: ng.ILocationProvider
    ) => {

      $stateProvider
        .state('home', {
          url: '/home',
          template: '<h1 id="home">Home</h1>'
        })
        .state('wiki', {
          url: '/wiki',
          template: '<h1 id="wiki">Wiki</h1>'
        });

      $urlRouterProvider.otherwise('/home');

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
  ]);

import './Navigation';
