import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import iconPin from "../assets/static/pin.svg";
import { Icon } from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";

const MapLeaflet = () => {
  const access_token =
    "pk.eyJ1IjoiZG9uY2VsaXMiLCJhIjoiY2tkcnBjZHRvMHMxcDJ4cGJ1Zm8xNGQ5NSJ9.y9K3zBTnDxgUK49q8WhPIA";

  let [data] = useState({
    position: [6.24822, -75.580032],
    mapUri: `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=${access_token}`,
    attribution: `Alexander Celis`,
    pin: new Icon({
      iconUrl: iconPin,
      iconRetinaUrl: iconPin,
      iconAnchor: null,
      shadowUrl: null,
      shadowAnchor: null,
      iconSize: [35, 35],
      className: "main-class",
    }),
  });

  let { position, mapUri, attribution, pin } = data;

  return (
    <section className="map">
      <Map
        doubleClickZoom={false}
        dragging={false}
        keyboard={false}
        scrollWheelZoom={false}
        center={position}
        zoomControl={false}
        zoom={12}
      >
        <TileLayer url={mapUri} attribution={attribution} />
        <Marker position={position} icon={pin} />
      </Map>
    </section>
  );
};

export default MapLeaflet;
