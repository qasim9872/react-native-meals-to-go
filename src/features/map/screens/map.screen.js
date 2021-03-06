import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import MapView from "react-native-maps";

import { SearchBar } from "../components/search.component";
import { useLocationContext } from "../../../services/location/location.context";
import { useRestaurantContext } from "../../../services/restaurants/restaurant.context";
import { MapCallout } from "../components/map-view.callout";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation: { navigate } }) => {
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
          return (
            <MapView.Marker
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              key={restaurant.name}
              title={restaurant.name}
            >
              <MapView.Callout
                onPress={() => navigate("RestaurantDetails", { restaurant })}
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
