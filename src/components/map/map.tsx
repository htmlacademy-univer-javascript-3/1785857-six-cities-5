import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../utils/useMap.ts';
import { PointType, PointsType } from '../../types/point.ts';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../utils/constants';
import 'leaflet/dist/leaflet.css';
import { CityType } from '../../types/city.ts';

type MapProps = {
  points: PointsType;
  selectedPoint: PointType | undefined;
  currentCity: CityType;
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

  const {points, selectedPoint, currentCity} = props;

  const mapRef = useRef(null);

  const map = useMap(mapRef, currentCity);

  useEffect(() => {

    if (map) {
      map.flyTo({
        lat: currentCity.lat,
        lng: currentCity.lng
      }, 10);

      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, currentCity.lat, currentCity.lng]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
