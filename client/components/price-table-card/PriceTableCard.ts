import { IPriceTableRowItem } from './IPriceTableRowItem';

class PriceTableCardController {

  constructor() {
    console.log('[PriceTableCardController] constructor()');
  }

  public prices: IPriceTableRowItem[];

  public getEmptyArray(length: number) {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return array.slice(0, length);
  }
}

export const priceTableCardComponentOptions: ng.IComponentOptions = {
  controller: PriceTableCardController,
  template: require('./PriceTableCard.html'),
  bindings: {
    prices: '<'
  }
};
