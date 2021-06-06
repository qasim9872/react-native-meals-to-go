import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { useRestaurantContext } from "../../../services/restaurants/restaurant.context";

const AppContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const restaurantContext = useRestaurantContext();

  return (
    <>
      <SafeArea>
        <AppContainer>
          <SearchBarContainer>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </SearchBarContainer>

          <RestaurantList
            data={restaurantContext.restaurants}
            renderItem={() => (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
        </AppContainer>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
