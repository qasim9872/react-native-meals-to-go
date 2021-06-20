import React, { useState, createContext, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();
const StorageTag = "MealsToGo:Favourites";

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthenticationContext();

  const saveFavourites = (value, uid) => {
    AsyncStorage.setItem(`${StorageTag}-${uid}`, JSON.stringify(value)).catch(
      console.error
    );
  };

  const loadFavourites = async (uid) => {
    const value = await AsyncStorage.getItem(`${StorageTag}-${uid}`).catch(
      console.error
    );
    if (value) {
      setFavourites(JSON.parse(value));
    }
  };

  useEffect(() => {
    user && loadFavourites(user.uid);
  }, [user]);

  useEffect(() => {
    user && saveFavourites(favourites, user.uid);
  }, [favourites, user]);

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
