import { IPriceTableRowItem } from '../components/price-table-card/IPriceTableRowItem';
import { ITravelSegment } from '../components/travel-segment/ITravelSegment';
import { IBikeData } from '../components/bike-card/IBikeData';

export interface ITourPageData {
  title: string;
  subtitle: string;
  descriptions: string[];
  travelSegments: ITravelSegment[];
  prices: IPriceTableRowItem[];
  mapImageUrl: string;
  bikes: IBikeData[];
  gallery: { imageURL: string; }[];
}
