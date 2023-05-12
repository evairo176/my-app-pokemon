import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";

function Maps() {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };
  return (
    <LoadScript
      libraries={["places"]}
      googleMapsApiKey="AIzaSyCzQRw5NCO0YkkmfA0bldR0Kwp1DHJwHNU"
    >
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Enter a location"
          className="form-control"
        />
      </Autocomplete>
      <br />
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
}

export default Maps;
