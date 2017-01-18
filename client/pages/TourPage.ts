import { IPriceTableRowItem } from '../components/price-table-card/IPriceTableRowItem';
import { ITravelSegment } from '../components/travel-segment/ITravelSegment';
import { ITourPageData } from './ITourPageData';
import { DATA_TOUR_ANDALUCIA } from '../data/DATA_TOUR_ANDALUCIA';
import { ScrollingService } from '../services/ScrollingService';
import { ConversionTrackingService } from '../services/ConversionTrackingService';
import { UserTrackingService } from '../services/UserTrackingService';

class TourPageController {

  public static $inject = ['scrollingService', 'conversionTrackingService', 'userTrackingService'];

  // own
  public pageName: string;
  public selectedTabIndex: number;
  private tabNames: string[];

  // bindings
  public data: ITourPageData;

  constructor(
    private scrollingService: ScrollingService,
    private conversionTrackingService: ConversionTrackingService,
    private userTrackingService: UserTrackingService
  ) {
    // own
    this.pageName = 'Tour';
    this.tabNames = ['Tour', 'Bikes', 'Bilder'];
    this.selectedTabIndex = 0;

    // bindings
    this.data = DATA_TOUR_ANDALUCIA;
  }

  public onPriceAndDatesButtonClick(tabName: string) {
    this.userTrackingService.clickViewPricesAndDatesButton(this.pageName, tabName);
    const elementId = 'configure-offer';
    this.scrollingService.scrollTo(elementId);
  }

  public onOrderNowButtonClick() {
    const selectedTabName = this.tabNames[this.selectedTabIndex];
    this.conversionTrackingService.clickOrderNowButton(this.pageName, selectedTabName);
  }

}

export const tourPageComponentOptions: ng.IComponentOptions = {
  controller: TourPageController,
  template: require('./TourPage.html')
};
