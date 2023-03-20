import { useEffect, useMemo, useState } from "react";

export const useLocation = () => {
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const isSuppported = useMemo(() => "geolocation" in navigator, []);

  useEffect(() => {
    if (!isSuppported) {
      return;
    }
    function setCoordinate(location: any) {
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    }
    navigator.geolocation.getCurrentPosition(setCoordinate);
    const watchId = navigator.geolocation.watchPosition(setCoordinate);
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [isSuppported]);

  return {
    isSuppported,
    longitude,
    latitude,
  };
};
