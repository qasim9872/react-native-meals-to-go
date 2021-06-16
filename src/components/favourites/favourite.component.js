import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useFavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useFavouritesContext();

  const isFavourite = favourites.find(
    ({ placeId }) => restaurant.placeId === placeId
  );

  const onPress = () =>
    isFavourite
      ? removeFromFavourites(restaurant)
      : addToFavourites(restaurant);

  return (
    <FavouriteButton onPress={onPress}>
      <AntDesign
        size={24}
        color={isFavourite ? "red" : "white"}
        name={isFavourite ? "heart" : "hearto"}
      />
    </FavouriteButton>
  );
};
