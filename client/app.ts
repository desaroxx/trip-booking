require('./css/Main.scss');

import * as angular from 'angular';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

import { bikeCardComponentOptions } from './components/bike-card/BikeCard';
import { configureOfferCardComponentOptions } from './components/configure-offer-card/ConfigureOfferCard';
import { currencyFilterFactoryFn } from './filters/CurrencyFilter';
import { expandableCardComponentOptions } from './components/expandable-card/ExpandableCard';
import { tourPageComponentOptions } from './pages/TourPage';
import { navigationComponentOptions } from './components/navigation/Navigation';
import { priceTableCardComponentOptions } from './components/price-table-card/PriceTableCard';
import { subscribeNewsletterCardComponentOptions } from './components/subscribe-newsletter-card/SubscribeNewsletterCard';
import { travelSegmentCardComponentOptions } from './components/travel-segment/TravelSegmentCard';
import { travelSegmentComponentOptions } from './components/travel-segment/TravelSegment';

const MODULE_NAME = 'hello';

angular.module(MODULE_NAME, ['ui.router', 'ngMaterial'])

  .filter('currencyFilter', currencyFilterFactoryFn)

  .component('bikeCard', bikeCardComponentOptions)
  .component('configureOfferCard', configureOfferCardComponentOptions)
  .component('expandableCard', expandableCardComponentOptions)
  .component('tourPage', tourPageComponentOptions)
  .component('navigation', navigationComponentOptions)
  .component('priceTableCard', priceTableCardComponentOptions)
  .component('subscribeNewsletterCard', subscribeNewsletterCardComponentOptions)
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
        .state('tour', {
          url: '/tour',
          template: '<tour-page></tour-page>'
        })
        .state('wiki', {
          url: '/wiki',
          template: '<h1 id="wiki">Wiki</h1>'
        });

      $urlRouterProvider.otherwise('/tour');

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
  ]);
