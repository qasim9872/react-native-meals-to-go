import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, FlatList } from "react-native";

import { Spacer } from "../spacer/spacer.component";
import { RestaurantInfoCard } from "./restaurant-info-card.component";
import { FadeInView } from "../animations/fade.animation";

const RestaurantFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantList = ({ restaurants, onClick }) => {
  return (
    <RestaurantFlatList
      data={restaurants}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => onClick(item)}>
            <Spacer position="bottom" size="large">
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  );
};
