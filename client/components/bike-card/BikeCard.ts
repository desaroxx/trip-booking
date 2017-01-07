import { IBikeData } from './IBikeData';

class BikeCardController {

  public bike: IBikeData;

}

export const bikeCardComponentOptions: ng.IComponentOptions = {
  controller: BikeCardController,
  template: require('./BikeCard.html'),
  bindings: {
    bike: '<'
  }
};
