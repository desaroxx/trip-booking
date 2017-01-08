export class UserTrackingService {

  public static pageView(pageName: string) {
    console.log('[UserTrackingService] pageView(): pageName:', pageName);
  }

  public static tabChange(pageName: string, previousTabName: string, nextTabName: string) {
    console.log('[UserTrackingService] subscribeNewsletter(): pageName:', pageName, ', previousTabName:', previousTabName, ', nextTabName:', nextTabName);
  }

  public static subscribeNewsletter(pageName: string, tabName: string) {
    console.log('[UserTrackingService] subscribeNewsletter(): pageName:', pageName, ', tabName:', tabName);
  }

  public static clickOrderNowButton(pageName: string, tabName: string) {
    console.log('[UserTrackingService] clickOrderNowButton(): pageName:', pageName, ', tabName:', tabName);
  }

  public static clickViewPricesAndDatesButton(pageName: string, tabName: string) {
    console.log('[UserTrackingService] clickViewPricesAndDatesButton(): pageName:', pageName, ', tabName:', tabName);
    fbq('track', 'Lead', {
      value: 10.00,
      currency: 'USD'
    });
  }

  public static touchedOfferConfigurator(pageName: string, tabName: string, elementId: string) {
    console.log('[UserTrackingService] touchedOfferConfigurator(): pageName:', pageName, ', tabName:', tabName, ', elementId:', elementId);
  }

}
