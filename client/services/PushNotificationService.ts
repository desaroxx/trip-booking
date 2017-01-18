import { ENVIRONMENTS } from '../enums/ENVIRONMENTS';

export class PushNotificationService {

  public static $inject = ['environment', '$http'];

  constructor(private environment: string, private $http: ng.IHttpService) { }

  public sendMakerEmail(action: string) {
    switch (this.environment) {
      case ENVIRONMENTS.PRODUCTION:
        const method = 'GET';
        const url = `https://maker.ifttt.com/trigger/${action}/with/key/dy6d5ab2nhrD-BW4XOGBh2`;
        this.$http({ method, url });
        return;
      case ENVIRONMENTS.DEVELOPMENT:
      default:
        return;
    }
  }

}
