import Leaflet from "leaflet";
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58,65],
  iconAnchor: [29, 65],
  popupAnchor: [170, 7]
});

export default mapIcon;
