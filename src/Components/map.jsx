import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZG9uY2VsaXMiLCJhIjoiY2tkcnBjZHRvMHMxcDJ4cGJ1Zm8xNGQ5NSJ9.y9K3zBTnDxgUK49q8WhPIA";
    
      const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: [-75.578125, 6.249659],
        zoom: 12,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
        map.scrollZoom.disable();
        map.dragPan.disable();
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

export default Map;
