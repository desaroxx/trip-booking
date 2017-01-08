export class ConversionTrackingService {

  public static subscribeNewsletter(pageName: string) {
    console.log('[ConversionTrackingService] subscribeNewsletter(): pageName:', pageName);
    fbq('track', 'CompleteRegistration');
  }

  public static clickOrderNowButton(pageName: string, tabName: string) {
    console.log('[ConversionTrackingService] clickOrderNowButton(): pageName:', pageName, ', tabName:', tabName);
    fbq('track', 'Lead', {
      value: 100,
      currency: 'CHF'
    });
  }

  public static touchedOfferConfigurator(pageName: string) {
    console.log('[ConversionTrackingService] touchedOfferConfigurator(): pageName:', pageName);
    fbq('track', 'Lead', {
      value: 10,
      currency: 'CHF'
    });
  }

}
