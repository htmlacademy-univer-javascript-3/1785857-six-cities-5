type CityType = {
  id: number;
  title: string;
  lat: number;
  lng: number;
  zoom: number;
}

type CitiesType = CityType[];

export type { CityType, CitiesType };
