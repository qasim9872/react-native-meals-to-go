import React, { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Loading } from "../../../components/utility/loading.component.js";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SearchBar } from "../components/search.component";
import { useRestaurantContext } from "../../../services/restaurants/restaurant.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { useFavouritesContext } from "../../../services/favourites/favourites.context";

const AppContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation: { navigate } }) => {
  const { restaurants, isLoading, error } = useRestaurantContext();
  const [isFavouritesToggled, setIsFavouritesToggled] = useState();
  const { favourites } = useFavouritesContext();

  const onFavouritesToggled = () =>
    setIsFavouritesToggled(!isFavouritesToggled);

  return (
    <>
      <SafeArea>
        <AppContainer>
          <SearchBar
            isFavouritesToggled={isFavouritesToggled}
            onFavouritesToggled={onFavouritesToggled}
          />

          {isFavouritesToggled && (
            <FavouritesBar favourites={favourites} onNavigate={navigate} />
          )}

          {isLoading && (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          )}

          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigate("RestaurantDetails", { restaurant: item })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </AppContainer>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
