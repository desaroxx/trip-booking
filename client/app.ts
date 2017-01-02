require('./css/Main.scss');

import * as angular from 'angular';
import { Sample } from './Sample';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

import { homePageComponentOptions } from './pages/HomePage';
import { expandableCardComponentOptions } from './components/expandable-card/ExpandableCard';
import { navigationComponentOptions } from './Navigation';
import { priceTableCardComponentOptions } from './components/price-table-card/PriceTableCard';
import { travelSegmentCardComponentOptions } from './components/travel-segment/TravelSegmentCard';
import { travelSegmentComponentOptions } from './components/travel-segment/TravelSegment';

const MODULE_NAME = 'hello';

angular.module(MODULE_NAME, ['ui.router', 'ngMaterial'])
  .component('expandableCard', expandableCardComponentOptions)
  .component('homePage', homePageComponentOptions)
  .component('navigation', navigationComponentOptions)
  .component('priceTableCard', priceTableCardComponentOptions)
  .component('travelSegment', travelSegmentComponentOptions)
  .component('travelSegmentCard', travelSegmentCardComponentOptions)
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
          template: '<home-page></home-page>'
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
