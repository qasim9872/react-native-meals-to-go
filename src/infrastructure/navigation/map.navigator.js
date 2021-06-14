import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { MapScreen } from "../../features/map/screens/map.screen";

const MapStack = createStackNavigator();

export const MapsNavigator = () => {
  return (
    <MapStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <MapStack.Screen name="Maps" component={MapScreen} />
    </MapStack.Navigator>
  );
};
