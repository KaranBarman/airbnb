"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCountries } from "../lib/GetCountries";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl:
    "https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/location-512.png",
  iconSize: [50, 50],
});

export default function Map({ locationValue }: { locationValue: string }) {
  const { getCountryByValue } = useCountries();
  const latLang = getCountryByValue(locationValue)?.latlang;
  return (
    <MapContainer
      center={latLang ?? [51.505, -0.09]}
      className="h-[50vh] rounded-lg relative z-0"
      scrollWheelZoom={false}
      zoom={8}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latLang ?? [51.505, -0.09]} icon={ICON} />
    </MapContainer>
  );
}
