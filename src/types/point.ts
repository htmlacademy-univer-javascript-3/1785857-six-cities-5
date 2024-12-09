type PointType = {
  title: string;
  lat: number;
  lng: number;
}

type PointsType = PointType[];

type CityType = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

export type { PointType, PointsType, CityType };
