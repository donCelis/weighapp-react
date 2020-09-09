import React from "react";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";

const MapLeaflet = () => {
  const data = {
    position: [6.24822, -75.580032],
    access_token: "pk.eyJ1IjoiZG9uY2VsaXMiLCJhIjoiY2tkcnBjZHRvMHMxcDJ4cGJ1Zm8xNGQ5NSJ9.y9K3zBTnDxgUK49q8WhPIA",
    mapUri: function (){ return "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token="+this.access_token },
    attribution: `Alexander Celis`,
    pin: new Icon({
      iconUrl:
        "https://res.cloudinary.com/weighappdzk6edcxp/image/upload/v1599671986/assets/img/pin_e1awfl.svg",
      iconRetinaUrl:
        "https://res.cloudinary.com/weighappdzk6edcxp/image/upload/v1599671986/assets/img/pin_e1awfl.svg",
      iconAnchor: null,
      shadowUrl: null,
      shadowAnchor: null,
      iconSize: [35, 35],
      className: "Leaflet-venue-icon",
    }),
  };
  return (
    <section className="map">
      <Map center={data.position} zoom={12}>
        <TileLayer url={data.mapUri()} attribution={data.attribution} />
        <Marker position={data.position} icon={data.pin} />
      </Map>
    </section>
  );
};

export default MapLeaflet;
