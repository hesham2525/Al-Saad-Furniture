import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './map.css'
const position = [24.5422, 46.7596]; 

function LeafletMap() {
  return (
    <div  className="responsive-map" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "500px" }}>
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
