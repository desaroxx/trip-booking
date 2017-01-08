class BikesTabController {

  // own
  public static TAB_NAME = 'Bikes';

  // bound
  public pageName: string;

}

export const bikesTabComponentOptions: ng.IComponentOptions = {
  controller: BikesTabController,
  template: require('./BikesTab.html'),
  bindings: {
    pageName: '@',
    bikes: '<'
  },
  transclude: true
};
