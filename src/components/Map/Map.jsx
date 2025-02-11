import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [24.570996, 46.741757]; // Riyadh, Saudi Arabia

function LeafletMap() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "500px" }}>
      <MapContainer center={position} zoom={10} style={{ height: "400px", width: "80%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>We are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
