import { IPriceTableRowItem } from '../components/price-table-card/IPriceTableRowItem';
import { ITravelSegment } from '../components/travel-segment/ITravelSegment';

class HomePageController {

  public segments: ITravelSegment[];
  public prices: IPriceTableRowItem[];
  public descriptions: string[];

  constructor() {
    this.segments = [
      {
        day: 1,
        from: 'Los Angeles, CA',
        to: 'Arrival',
        km: 0,
        description: `Viva Las Vegas! Let us know if you'd like to do some sightseeing in 'Sin City', and we will be happy to arrange a few extra days at our tour hotel for you. Tonight you’ll have a chance to meet your fellow riders and guide team at a detailed Orientation Meeting, followed by a great meal and some cold drinks at the tour's Welcome Dinner on the Las Vegas Strip.`,
        imageURL: `http://d56b293rhv8dp.cloudfront.net/tour_activity_assets/2028/images/size279/las_vegas_day_8.jpg?1469116204`
      }, {
        day: 2,
        from: 'Los Angeles',
        to: 'Palm Springs, CA',
        km: 312,
        description: `Grab your favorite Indian, Harley, Honda, BMW, or Triumph motorcycle from EagleRider Las Vegas and let’s hit the road! We'll see great views of Hoover Dam on our way to lunch in the historic, old west mining town of Oatman, Arizona where wild donkeys still roam the streets. Oatman marks the beginning of our journey along Historic Route 66, which we'll enjoy over the next few days. Tonight we’ll have some fun and kick back in the Route 66 town of Kingman where cold beers and giant steaks are calling.`,
        imageURL: `http://d56b293rhv8dp.cloudfront.net/tour_activity_assets/2029/images/size279/eaglerider-canyons-sw-tour_day2_(2).jpg?1469138615`
      }, {
        day: 3,
        from: 'Palm Springs',
        to: 'Kingman, AZ',
        km: 225,
        description: `Get your kicks on Route 66! The perfect motorcycle riding day lies ahead, along the longest and best-preserved stretch of the original 'Mother Road' that still exists. As we cruise through towns like Hackberry, Peach Springs and Seligman, you might feel a sense of going back in time: with the vast, open landscapes surrounding you, and long freight trains rolling by, it will be easy to imagine what auto travel on America's Main Street was like in generations past. If you have ever dreamed of witnessing the sunset over the rim of the Grand Canyon, your dream is about to come true. The view of this astounding sight will leave you speechless and awestruck!`,
        imageURL: `http://d56b293rhv8dp.cloudfront.net/tour_activity_assets/2030/images/size279/eaglerider-canyons-sw-tour_day3-(2).jpg?1469138617`
      }
    ];

    this.prices = [
      {
        people: 2,
        bikes: 1,
        rooms: 1,
        price: 1999
      }, {
        people: 2,
        bikes: 2,
        rooms: 1,
        price: 2799
      }, {
        people: 1,
        bikes: 1,
        rooms: 1,
        price: 2399
      }
    ];

    this.descriptions = [
      `Die faszinierende Motorradtour zu den Highlights Andalusiens. Entlang der spannenden Strecken im Motorradparadies Südspanien besuchen wir die schönsten Städte dieser Region. Hier errichteten die Mauren herrliche Paläste, Gärten und Moscheen, gründeten Universitäten und etablierten bedeutende Märkte.`,
      `Die Strassen Andalusiens gehören zweifellos zu den spektakulärsten und eindrucksvollsten in ganz Spanien. Sie führen uns anfänglich von Malaga die Küste entlang  zum mondänen Marbella, von wo aus wir die Bergstrassen der Sierra de Ronda erklimmen. Über die weissen Dörfer Andlausiens erreichen wir dessen elegante und einladende Hauptstadt Sevilla. Dort verweilen wir einen Tag und bummeln durch enge Gassen, über kleine Plätze zu einer Verschnaufpause in die Altstadtbars, um köstliche Tapas zu genießen oder ein Glas Wein zu trinken.`,
      `Weiter geht es auf den Panoramastrassen der Stauseen des Guadalquiviers zur nächsten maurischen Perle dieser Tour nach Cordoba, das uns mit seiner einzigartigen Atmosphäre erwartet. Wir besuchen Granada und seine Alhambra und erfreuen uns an den Bergetappen in der Sierra Nevada, bevor wir das Mittelmeer entlang wieder nach Malaga zurückkehren.`,
      `Die Reise bietet dem/der Motorradfahrer/in Fahrspaß auf kleinen, kurvenreichen Gebirgsstraßen, und durch wunderschöne Landschaften. Die gesamte Route verläuft auf Asphaltstraßen. Nach den Tagesetappen erwartet Sie der Komfort eines ausgewählten 4* Hotels.`
    ];
  }
}

export const homePageComponentOptions: ng.IComponentOptions = {
  controller: HomePageController,
  template: require('./HomePage.html')
};
