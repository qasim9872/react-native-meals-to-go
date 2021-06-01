import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { spacing } from "./src/constants/sizes";

const isAndroid = Platform.OS === "android";

export default function App() {
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
            <Text>App</Text>
          </View>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
    // backgroundColor: "green",
  },
  appView: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: "yellow",
  },
});
