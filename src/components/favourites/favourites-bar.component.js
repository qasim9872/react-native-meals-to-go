import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";

import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfoCard } from "../components/compact-restaurant-info-card.component";
import { Text } from "../typography/text.component";

const FavouritesBarView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const FavouritesBar = ({ favourites = [], onNavigate }) => {
  if (favourites.length === 0) {
    return null;
  }

  return (
    <FavouritesBarView>
      <Spacer size="large" position="left">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <Spacer key={restaurant.name} size="medium" position="left">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetails", { restaurant })}
              >
                <CompactRestaurantInfoCard restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesBarView>
  );
};
