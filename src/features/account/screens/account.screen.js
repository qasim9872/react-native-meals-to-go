import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { AccountBackground, AccountCover } from "../components/account.styles";

export const AccountScreen = () => (
  <AccountBackground>
    <AccountCover />
    <View>
      <Text>AccountScreen</Text>
    </View>
  </AccountBackground>
);
