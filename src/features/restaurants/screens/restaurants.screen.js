import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { spacing } from "../../../constants/sizes";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.appContainer}>
          <View style={styles.searchBar}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>

          <View style={styles.appView}>
            <RestaurantInfoCard />
          </View>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  appContainer: {
    flex: 1,
    justifyContent: "center",
  },
  searchBar: {
    padding: spacing.md,
  },
  appView: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: "blue",
  },
});
