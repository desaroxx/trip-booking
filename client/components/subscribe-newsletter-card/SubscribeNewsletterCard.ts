import { ConversionTrackingService } from '../../services/ConversionTrackingService';

class SubscribeNewsletterCardController {

  public pageName: string;

  public onSubscribeButtonClick(isValid: boolean) {
    ConversionTrackingService.subscribeNewsletter(this.pageName);
  }

}

export const subscribeNewsletterCardComponentOptions: ng.IComponentOptions = {
  controller: SubscribeNewsletterCardController,
  template: require('./SubscribeNewsletterCard.html'),
  bindings: {
    pageName: '@'
  }
};
