import React, { useState, createContext, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();
const StorageTag = "MealsToGo:Favourites";

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = (value) =>
    AsyncStorage.setItem(StorageTag, JSON.stringify(value)).catch(
      console.error
    );

  const loadFavourites = async () => {
    const value = await AsyncStorage.getItem(StorageTag).catch(console.error);
    if (value) {
      setFavourites(JSON.parse(value));
    }
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const addToFavourites = (restaurant) =>
    setFavourites([...favourites, restaurant]);

  const removeFromFavourites = (restaurant) =>
    setFavourites(
      favourites.filter(({ placeId }) => placeId !== restaurant.placeId)
    );

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesContext = () => useContext(FavouritesContext);
