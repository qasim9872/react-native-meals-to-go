import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactCardView = styled.View`
  padding: ${(props) => props.theme.space[2]};
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfoCard = ({ restaurant, isMap = false }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <CompactCardView>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variation="caption">{restaurant.name}</Text>
    </CompactCardView>
  );
};
