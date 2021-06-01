import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const AppContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const AppView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: blue;
`;

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

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

          <AppView>
            <RestaurantInfoCard />
          </AppView>
        </AppContainer>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};
