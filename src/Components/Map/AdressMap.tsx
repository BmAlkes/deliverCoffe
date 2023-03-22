import { useLoadScript } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";

import { useLocation } from "../../hooks/useLocation";
import Loading from "../loading/Loading";

const AdressMap = () => {
  const { latitude, longitude } = useLocation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS,
  });
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: latitude!,
    lng: longitude!,
  };
  return (
    <>
      {!isLoaded && <Loading />}

      <GoogleMapReact
        style={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMapReact>
      {/* Child components, such as markers, info windows, etc. */}
    </>
  );
};

export default AdressMap;
