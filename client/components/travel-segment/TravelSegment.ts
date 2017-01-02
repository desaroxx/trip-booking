import { ITravelSegment } from './ITravelSegment';

class TravelSegmentController {

  public isExpanded: boolean;
  public segment: ITravelSegment;

  constructor() {
    this.isExpanded = false;
  }

  public toggle() {
    this.isExpanded = !this.isExpanded;
  }

}

export const travelSegmentComponentOptions: ng.IComponentOptions = {
  controller: TravelSegmentController,
  template: require('./TravelSegment.html'),
  bindings: {
    segment: '<'
  }
};
