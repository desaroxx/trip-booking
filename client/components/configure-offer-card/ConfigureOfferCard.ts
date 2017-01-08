import { ConversionTrackingService } from '../../services/ConversionTrackingService';
import { ITourDate } from './ITourDate';

class ConfigureOfferCardController {

  // internal
  public persons: number;
  public bikes: number;
  public rooms: number;
  public configureOfferForm: ng.IFormController;

  // bound
  public selectedBike1: { title: string; imageURL: string; price: number; };
  public selectedBike2: { title: string; imageURL: string; price: number; };
  public selectedTourDate: ITourDate;
  public availableBikes: { title: string; imageURL: string; price: number; }[];
  public pageName: string;
  public pricePerRoom: number;
  public pricePerPerson: number;
  public tourDates: ITourDate[];

  constructor(private $scope: ng.IScope) {
    this.persons = 1;
    this.bikes = 1;
    this.rooms = 1;

    this.attachWatchers();
  }

  private attachWatchers() {
    this.$scope.$watch(() => this.configureOfferForm.$dirty, newValue => newValue ? this.onFormFirstTouched() : null);
  }

  public getTotal() {
    const personCost = this.selectedTourDate.price + ((this.persons - 1) * this.pricePerPerson);
    const bikeCost = this.selectedBike1.price + (this.bikes === 2 ? this.selectedBike2.price : 0);
    const roomCost = this.rooms === 2 ? this.pricePerRoom : 0;
    return personCost + bikeCost + roomCost;
  }

  public onFormFirstTouched() {
    ConversionTrackingService.touchedOfferConfigurator(this.pageName);
  }

}

export const configureOfferCardComponentOptions: ng.IComponentOptions = {
  controller: ConfigureOfferCardController,
  template: require('./ConfigureOfferCard.html'),
  bindings: {
    pageName: '@',
    selectedBike1: '<',
    selectedBike2: '<',
    availableBikes: '<',
    pricePerRoom: '<',
    pricePerPerson: '<',
    selectedTourDate: '<',
    tourDates: '<'
  }
};
