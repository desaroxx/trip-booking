import { IPriceTableRowItem } from '../components/price-table-card/IPriceTableRowItem';
import { ITravelSegment } from '../components/travel-segment/ITravelSegment';
import { ITourPageData } from './ITourPageData';
import { DATA_TOUR_ANDALUCIA } from '../data/DATA_TOUR_ANDALUCIA';
import { UserTrackingService } from '../services/UserTrackingService';

class TourPageController {

  public static $inject = ['$document'];

  public data: ITourPageData;

  constructor(private $document: ng.IDocumentService) {
    this.data = DATA_TOUR_ANDALUCIA;
  }

  public onPriceAndDatesButtonClick(pageName: string, tabName: string) {
    UserTrackingService.clickViewPricesAndDatesButton(pageName, tabName);
    this.scrollTo('configure-offer');
  }

  private scrollTo(id: string) {
    document.getElementById(id).scrollIntoView();
  }

}

export const tourPageComponentOptions: ng.IComponentOptions = {
  controller: TourPageController,
  template: require('./TourPage.html')
};
