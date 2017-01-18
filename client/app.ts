require('./css/Main.scss');

import * as angular from 'angular';

import { bikeCardComponentOptions } from './components/bike-card/BikeCard';
import { bikesTabComponentOptions } from './components/bikes-tab/BikesTab';
import { configureOfferCardComponentOptions } from './components/configure-offer-card/ConfigureOfferCard';
import { ConversionTrackingService } from './services/ConversionTrackingService';
import { currencyFilterFactoryFn } from './filters/CurrencyFilter';
import { ENVIRONMENTS } from './enums/ENVIRONMENTS';
import { expandableCardComponentOptions } from './components/expandable-card/ExpandableCard';
import { galleryTabComponentOptions } from './components/gallery-tab/GalleryTab';
import { tourPageComponentOptions } from './pages/TourPage';
import { navigationComponentOptions } from './components/navigation/Navigation';
import { priceTableCardComponentOptions } from './components/price-table-card/PriceTableCard';
import { PushNotificationService } from './services/PushNotificationService';
import { ScrollingService } from './services/ScrollingService';
import { subscribeNewsletterCardComponentOptions } from './components/subscribe-newsletter-card/SubscribeNewsletterCard';
import { travelSegmentCardComponentOptions } from './components/travel-segment/TravelSegmentCard';
import { travelSegmentComponentOptions } from './components/travel-segment/TravelSegment';
import { tourTabComponentOptions } from './components/tour-tab/TourTab';
import { UserTrackingService } from './services/UserTrackingService';

const MODULE_NAME = 'app';

function getEnvironment() {
  const { hostname } = window.location;
  switch (hostname) {
    case 'tripahoi.ch': return ENVIRONMENTS.PRODUCTION;
    case 'localhost':
    default:
      return ENVIRONMENTS.LOCAL;
  }
}

angular.module(MODULE_NAME, ['ui.router', 'ngMaterial'])

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

  .constant('environment', getEnvironment())

  .filter('currencyFilter', currencyFilterFactoryFn)

  .service('conversionTrackingService', ConversionTrackingService)
  .service('pushNotificationService', PushNotificationService)
  .service('scrollingService', ScrollingService)
  .service('userTrackingService', UserTrackingService)

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
    'userTrackingService',
    (userTrackingService: UserTrackingService) => userTrackingService.initialize()
  ]);
