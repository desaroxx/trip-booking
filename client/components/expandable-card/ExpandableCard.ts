
class ExpandableCardController {

  public isExpanded: boolean;

  constructor() {
    this.isExpanded = false;
  }

  public toggle() {
    this.isExpanded = !this.isExpanded;
  }

}

export const expandableCardComponentOptions: ng.IComponentOptions = {
  controller: ExpandableCardController,
  template: require('./ExpandableCard.html'),
  transclude: true,
  bindings: {
    title: '@'
  }
};
