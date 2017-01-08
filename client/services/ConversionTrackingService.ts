export class ConversionTrackingService {

  public static subscribeNewsletter(pageName: string, tabName: string) {
    console.log('[ConversionTrackingService] subscribeNewsletter(): pageName:', pageName, ', tabName:', tabName);
  }

  public static clickOrderNowButton(pageName: string, tabName: string) {
    console.log('[ConversionTrackingService] clickOrderNowButton(): pageName:', pageName, ', tabName:', tabName);
  }

}
