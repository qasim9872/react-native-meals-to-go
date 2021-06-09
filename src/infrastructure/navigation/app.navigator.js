import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons
        name={focused ? iconName : `${iconName}-outline`}
        size={size}
        color={color}
      />
    ),
  };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
