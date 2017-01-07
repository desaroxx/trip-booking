interface ITourDate {
  value: string;
  from: string;
  to: string;
  price: number;
}

class ConfigureOfferCardController {
  public tourDates: ITourDate[];
  public selectedTourDate: ITourDate;

  public persons: number;
  public bikes: number;
  public rooms: number;
  public availableBikes: { title: string; imageURL: string; price: number; }[];
  public selectedBike1: { title: string; imageURL: string; price: number; };
  public selectedBike2: { title: string; imageURL: string; price: number; };

  public pricePerRoom: number;
  public pricePerPerson: number;

  constructor() {
    // internal
    this.persons = 1;
    this.bikes = 1;
    this.rooms = 1;

    // passed
    this.tourDates = [
      {
        value: `23.05.2017 - 31.05.2017 (ab CHF 1'999)`,
        from: `23.05.2017`,
        to: `31.05.2017`,
        price: 1999
      }, {
        value: `01.06.2017 - 08.06.2017 (ab CHF 2'199)`,
        from: `01.06.2017`,
        to: `08.06.2017`,
        price: 2199
      }, {
        value: `09.06.2017 - 16.06.2017 (ab CHF 2'199)`,
        from: `09.06.2017`,
        to: `16.06.2017`,
        price: 2199
      }, {
        value: `17.07.2017 - 24.06.2017 (ab CHF 2'399)`,
        from: `17.07.2017`,
        to: `24.06.2017`,
        price: 2399
      }
    ];

    this.selectedTourDate = this.tourDates[0];

    this.availableBikes = [
      {
        title: `Eigenes Motorrad`,
        imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/EigenesBikeIcon.gif`,
        price: 0
      }, {
        title: `BMW F700GS`,
        imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/F650-800GSIcon.gif`,
        price: 570
      }, {
        title: `BMW F800GS / ADV`,
        imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/F650-800GSIcon.gif`,
        price: 630
      }, {
        title: `BMW R1200GS / ADV`,
        imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/R1200GSIcon.gif`,
        price: 810
      }, {
        title: `BMW R1200R`,
        imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/R1200RIcon.gif`,
        price: 720
      }, {
        title: `BMW R1200RT`,
        imageURL: `http://www.hispania-tours.de/fileadmin/website/imgs/iconBikes/R1200RTIcon.gif`,
        price: 870
      }
    ];

    this.selectedBike1 = this.availableBikes[0];
    this.selectedBike2 = this.availableBikes[0];

    this.pricePerRoom = 400;
    this.pricePerPerson = 1200;
  }

  public getTotal() {
    const personCost = this.selectedTourDate.price + ((this.persons - 1) * this.pricePerPerson);
    const bikeCost = this.selectedBike1.price + (this.bikes === 2 ? this.selectedBike2.price : 0);
    const roomCost = this.rooms === 2 ? this.pricePerRoom : 0;
    return personCost + bikeCost + roomCost;
  }
}

export const configureOfferCardComponentOptions: ng.IComponentOptions = {
  controller: ConfigureOfferCardController,
  template: require('./ConfigureOfferCard.html')
};
