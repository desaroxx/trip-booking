import { ConversionTrackingService } from '../../services/ConversionTrackingService';

class SubscribeNewsletterCardController {

  public static $inject = ['conversionTrackingService'];

  constructor(private conversionTrackingService: ConversionTrackingService) {}

  public pageName: string;

  public onSubscribeButtonClick(isValid: boolean) {
    this.conversionTrackingService.subscribeNewsletter(this.pageName);
  }

}

export const subscribeNewsletterCardComponentOptions: ng.IComponentOptions = {
  controller: SubscribeNewsletterCardController,
  template: require('./SubscribeNewsletterCard.html'),
  bindings: {
    pageName: '@'
  }
};
