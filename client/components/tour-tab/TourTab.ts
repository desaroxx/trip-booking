import { UserTrackingService } from '../../services/UserTrackingService';

class TourTabController {

  // own
  public static TAB_NAME = 'Tour';

  // bound
  public pageName: string;

}

export const tourTabComponentOptions: ng.IComponentOptions = {
  controller: TourTabController,
  template: require('./TourTab.html'),
  bindings: {
    pageName: '@',
    data: '<'
  },
  transclude: true
};
