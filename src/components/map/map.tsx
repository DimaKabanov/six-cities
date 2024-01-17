import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import type { City, Location } from '../../types/offer';
import { urlMarkerDefault } from '../../const';

type MapProps = {
  locations: Location[];
  city: City;
}

const defaultCustomIcon = new Icon({
  iconUrl: urlMarkerDefault,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, locations }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, locations]);

  return (
    <section ref={mapRef} className="cities__map map" />
  );
}

export default Map;
