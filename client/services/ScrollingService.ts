export class ScrollingService {

  public static $inject = ['$location', '$anchorScroll'];

  constructor(
    private $location: ng.ILocationService,
    private $anchorScroll: ng.IAnchorScrollService
  ) { }

  public scrollTo(elementId: string) {
    this.$location.hash(elementId);
    this.$anchorScroll();
  }

}
