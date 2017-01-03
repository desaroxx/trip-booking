import { IBikeData } from './IBikeData';

class BikeCardController {

  public bike: IBikeData;

  constructor() {
    console.log('constructor(): this.bike:', this.bike);
  }

}

export const bikeCardComponentOptions: ng.IComponentOptions = {
  controller: BikeCardController,
  template: require('./BikeCard.html'),
  bindings: {
    bike: '<'
  }
};
