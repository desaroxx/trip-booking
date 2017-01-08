import { IPriceTableRowItem } from '../components/price-table-card/IPriceTableRowItem';
import { ITravelSegment } from '../components/travel-segment/ITravelSegment';
import { IBikeData } from '../components/bike-card/IBikeData';
import { ITourDate } from '../components/configure-offer-card/ITourDate';

export interface ITourPageData {
  title: string;
  subtitle: string;
  descriptions: string[];
  travelSegments: ITravelSegment[];
  prices: IPriceTableRowItem[];
  mapImageUrl: string;
  bikes: IBikeData[];
  gallery: { imageURL: string; }[];
  tourDates: ITourDate[];
  pricePerRoom: number;
  pricePerPerson: number;
}
