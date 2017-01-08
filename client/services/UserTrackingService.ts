export class UserTrackingService {

  public static pageView(pageName: string) {
    console.log('[UserTrackingService] pageView(): pageName:', pageName);
  }

  public static tabChange(pageName: string, previousTabName: string, nextTabName: string) {
    console.log('[UserTrackingService] subscribeNewsletter(): pageName:', pageName, ', previousTabName:', previousTabName, ', nextTabName:', nextTabName);
  }

  public static clickViewPricesAndDatesButton(pageName: string, tabName: string) {
    console.log('[UserTrackingService] clickViewPricesAndDatesButton(): pageName:', pageName, ', tabName:', tabName);
  }

}
