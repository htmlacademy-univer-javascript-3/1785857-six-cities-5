type PointType = {
  title?: string;
  latitude: number;
  longitude: number;
  zoom: number;
  id?: string;
}

type PointsType = PointType[];

export type { PointType, PointsType };
