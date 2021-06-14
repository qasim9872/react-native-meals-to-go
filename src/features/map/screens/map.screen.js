import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import MapView from "react-native-maps";

import { SearchBar } from "../components/search.component";
import { useLocationContext } from "../../../services/location/location.context";
import { useRestaurantContext } from "../../../services/restaurants/restaurant.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useLocationContext();
  const { restaurants = [] } = useRestaurantContext();

  const { lat, lng, viewport } = location;
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const calculatedLatDelta = northeastLat - southwestLat;
    setLatDelta(calculatedLatDelta);
  }, [viewport]);

  return (
    <>
      <SearchBar />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};
