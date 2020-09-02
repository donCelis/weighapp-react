import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

const MapCom = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZG9uY2VsaXMiLCJhIjoiY2tkcnBjZHRvMHMxcDJ4cGJ1Zm8xNGQ5NSJ9.y9K3zBTnDxgUK49q8WhPIA";

    const centerMap = [-75.578125, 6.249659];

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: centerMap,
        zoom: 12,
      });

      const marker = new mapboxgl.Marker();

      map.on("load", () => {
        setMap(map);
        map.resize();
        map.boxZoom.disable();
        map.scrollZoom.disable();
        map.dragPan.disable();
        map.dragRotate.disable();
        map.doubleClickZoom.disable();
        map.touchZoomRotate.disable();
        map.touchPitch.disable();
        marker.setLngLat(centerMap).addTo(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <section className="map">
      <div ref={(el) => (mapContainer.current = el)} />
    </section>
  );
};

export default MapCom;
