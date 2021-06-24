import React from "react";
import styled from "styled-components/native";

import { RestaurantList } from "../../../components/restaurant/RestaurantList.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { useFavouritesContext } from "../../../services/favourites/favourites.context";

const NoFavouritesArea = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

export const FavouritesScreen = ({ navigation: { navigate } }) => {
  const { favourites } = useFavouritesContext();

  return favourites && favourites.length ? (
    <SafeArea>
      <RestaurantList
        restaurants={favourites}
        onClick={(restaurant) => navigate("RestaurantDetails", restaurant)}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites Yet</Text>
    </NoFavouritesArea>
  );
};
