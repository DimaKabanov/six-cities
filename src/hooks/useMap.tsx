import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import type { City } from '../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isInitialized.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      );

      instance.addLayer(layer);

      setMap(instance);

      isInitialized.current = true;
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
