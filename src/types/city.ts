import { PointType } from './point';

type CityType = {
  id: number;
  name: string;
  location: PointType;
}

type CitiesType = CityType[];

export type { CityType, CitiesType };
