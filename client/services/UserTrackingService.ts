import { ENVIRONMENTS } from '../enums/ENVIRONMENTS';
import { PushNotificationService } from './PushNotificationService';

export class UserTrackingService {

  public static $inject = ['environment', '$rootScope', '$location', 'pushNotificationService'];

  constructor(
    private environment: string,
    private $rootScope: ng.IRootScopeService,
    private $location: ng.ILocationService,
    private pushNotificationService: PushNotificationService
  ) {}

  public initialize() {
    this.registerWatchers();

    // push to notify a visit IFTTT style
    this.pushNotificationService.sendMakerEmail('visit');

    // google analytics
    this.dispatchAnalyticsEvent('create', 'UA-90383943-1', 'auto');

    // facebook pixel
    this.dispatchFBQ('init', '140968403058884');
  }

  public dispatchFBQ(arg1: string, arg2: string, arg3?: any) {
    switch(this.environment) {
      case ENVIRONMENTS.PRODUCTION:
        arg3
          ? fbq(arg1, arg2, arg3)
          : fbq(arg1, arg2);
        return;
      case ENVIRONMENTS.LOCAL:
      default:
        return;
    }
  }

  public dispatchAnalyticsEvent(arg1: string, arg2: string, arg3?: any) {
    switch(this.environment) {
      case ENVIRONMENTS.PRODUCTION:
        arg3
          ? ga(arg1, arg2, arg3)
          : ga(arg1, arg2);
        return;
      case ENVIRONMENTS.LOCAL:
      default:
        return;
    }
  }

  public clickViewPricesAndDatesButton(pageName: string, tabName: string) {
    console.log('[UserTrackingService] clickViewPricesAndDatesButton()');
  }

  private registerWatchers() {
    this.$rootScope.$on('$stateChangeSuccess', event => this.onStateChange());
  }

  private onStateChange() {
    this.dispatchAnalyticsEvent('send', 'pageview', this.$location.path());
    this.dispatchFBQ('track', 'PageView');
  }

}
