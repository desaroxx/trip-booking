require('./css/Main.scss');

import * as angular from 'angular';

import { bikeCardComponentOptions } from './components/bike-card/BikeCard';
import { bikesTabComponentOptions } from './components/bikes-tab/BikesTab';
import { configureOfferCardComponentOptions } from './components/configure-offer-card/ConfigureOfferCard';
import { currencyFilterFactoryFn } from './filters/CurrencyFilter';
import { expandableCardComponentOptions } from './components/expandable-card/ExpandableCard';
import { galleryTabComponentOptions } from './components/gallery-tab/GalleryTab';
import { tourPageComponentOptions } from './pages/TourPage';
import { navigationComponentOptions } from './components/navigation/Navigation';
import { priceTableCardComponentOptions } from './components/price-table-card/PriceTableCard';
import { ScrollingService } from './services/ScrollingService';
import { subscribeNewsletterCardComponentOptions } from './components/subscribe-newsletter-card/SubscribeNewsletterCard';
import { travelSegmentCardComponentOptions } from './components/travel-segment/TravelSegmentCard';
import { travelSegmentComponentOptions } from './components/travel-segment/TravelSegment';
import { tourTabComponentOptions } from './components/tour-tab/TourTab';

const MODULE_NAME = 'hello';

angular.module(MODULE_NAME, ['ui.router', 'ngMaterial'])

  .filter('currencyFilter', currencyFilterFactoryFn)

  .component('bikeCard', bikeCardComponentOptions)
  .component('bikesTab', bikesTabComponentOptions)
  .component('configureOfferCard', configureOfferCardComponentOptions)
  .component('expandableCard', expandableCardComponentOptions)
  .component('galleryTab', galleryTabComponentOptions)
  .component('tourPage', tourPageComponentOptions)
  .component('navigation', navigationComponentOptions)
  .component('priceTableCard', priceTableCardComponentOptions)
  .component('subscribeNewsletterCard', subscribeNewsletterCardComponentOptions)
  .component('tourTab', tourTabComponentOptions)
  .component('travelSegment', travelSegmentComponentOptions)
  .component('travelSegmentCard', travelSegmentCardComponentOptions)

  .service('scrollingService', ScrollingService)

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    (
      $stateProvider: ng.ui.IStateProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      $locationProvider: ng.ILocationProvider
    ) => {

      $stateProvider
        .state('tour', {
          url: '/tour/:tourName',
          template: '<tour-page></tour-page>'
        });

      $urlRouterProvider.otherwise('/tour/andalusien');

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
  ])

  .run([
    '$window',
    '$rootScope',
    '$location',
    (
      $window: ng.IWindowService ,
      $rootScope: ng.IRootScopeService,
      $location: ng.ILocationService
    ) => {
      // facebook pixel
      fbq('init', '140968403058884');

      // google analytics
      ga('create', 'UA-90383943-1', 'auto');

      $rootScope.$on('$stateChangeSuccess', event => {
        console.log('$on $stateChangeSuccess');
        ga('send', 'pageview', $location.path());
        fbq('track', 'PageView');
      });
    }
  ]);
