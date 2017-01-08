class GalleryTabController {

  // bound
  public images: { imageURL: string; }[];

  // own
  public static TAB_NAME = 'Gallery';

  // bound
  public pageName: string;

}

export const galleryTabComponentOptions: ng.IComponentOptions = {
  controller: GalleryTabController,
  template: require('./GalleryTab.html'),
  bindings: {
    pageName: '@',
    images: '<',
    isSelected: '<'
  },
  transclude: true
};
