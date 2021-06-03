import React from "react";
import { StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

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

  return (
    <>
      <SafeAreaView>
        <AppContainer>
          <SearchBarContainer>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </SearchBarContainer>

          <RestaurantList
            data={Array.from(new Array(10)).map((_, index) => ({
              name: index + 1,
            }))}
            renderItem={() => (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
        </AppContainer>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};
