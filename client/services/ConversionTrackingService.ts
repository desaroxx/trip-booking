import { PushNotificationService } from './PushNotificationService';
import { UserTrackingService } from './UserTrackingService';

export class ConversionTrackingService {

  public static $inject = ['pushNotificationService', 'userTrackingService'];

  constructor(
    private pushNotificationService: PushNotificationService,
    private userTrackingService: UserTrackingService
  ) { }

  public subscribeNewsletter(pageName: string) {
    console.log('[ConversionTrackingService] subscribeNewsletter(): pageName:', pageName);

    this.userTrackingService.dispatchFBQ('track', 'CompleteRegistration');
    this.userTrackingService.dispatchAnalyticsEvent('send', 'event', {
      eventCategory: 'newsletter',
      eventAction: 'subscribe newsletter'
    });

    this.pushNotificationService.sendMakerEmail('conversion');
  }

  public clickOrderNowButton(pageName: string, tabName: string) {
    console.log('[ConversionTrackingService] clickOrderNowButton(): pageName:', pageName, ', tabName:', tabName);

    this.userTrackingService.dispatchFBQ('track', 'Lead', {
      value: 100,
      currency: 'CHF'
    });
    this.userTrackingService.dispatchAnalyticsEvent('send', 'event', {
      eventCategory: 'purchase-process',
      eventAction: 'order now button click'
    });

    this.pushNotificationService.sendMakerEmail('conversion');
  }

  public touchedOfferConfigurator(pageName: string) {
    console.log('[ConversionTrackingService] touchedOfferConfigurator(): pageName:', pageName);

    this.userTrackingService.dispatchFBQ('track', 'Lead', {
      value: 10,
      currency: 'CHF'
    });

    this.userTrackingService.dispatchAnalyticsEvent('send', 'event', {
      eventCategory: 'interaction',
      eventAction: 'touch offer configurator'
    });

    this.pushNotificationService.sendMakerEmail('conversion');
  }

}
