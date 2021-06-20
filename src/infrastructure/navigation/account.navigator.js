import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { Text } from "../../components/typography/text.component";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator headerMode="none">
      <AccountStack.Screen
        name="Accounts"
        component={() => (
          <View>
            <Text>Account</Text>
          </View>
        )}
      />
    </AccountStack.Navigator>
  );
};
