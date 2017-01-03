import { IPriceTableRowItem } from '../components/price-table-card/IPriceTableRowItem';
import { ITravelSegment } from '../components/travel-segment/ITravelSegment';
import { ITourPageData } from './ITourPageData';
import { DATA_TOUR_ANDALUCIA } from '../data/DATA_TOUR_ANDALUCIA';

class TourPageController {

  public data: ITourPageData;

  constructor() {
    this.data = DATA_TOUR_ANDALUCIA;
  }

}

export const tourPageComponentOptions: ng.IComponentOptions = {
  controller: TourPageController,
  template: require('./TourPage.html')
};
