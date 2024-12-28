import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../utils/useMap.ts';
import { PointType, PointsType } from '../../types/point.ts';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../utils/constants';
import 'leaflet/dist/leaflet.css';
import { CityType } from '../../types/city.ts';
import { useAppSelector } from '../../hooks/index.ts';
import { CardsType } from '../../types/card.ts';

type MapProps = {
  selectedPoint: PointType | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {

  const offers: CardsType = useAppSelector((state) => state.offers);

  const points: PointsType = offers.map((elem) => ({title: elem.title, latitude: elem.location.latitude, longitude: elem.location.longitude, zoom: elem.location.zoom}));

  const currentCity: CityType = useAppSelector((state) => state.city);

  const {selectedPoint} = props;

  const mapRef = useRef(null);

  const map = useMap(mapRef, currentCity);

  useEffect(() => {

    if (map) {
      map.flyTo({
        lat: currentCity.location.latitude,
        lng: currentCity.location.longitude
      }, 10);

      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.latitude === selectedPoint.latitude && point.longitude === selectedPoint.longitude
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, currentCity.location.latitude, currentCity.location.longitude]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
