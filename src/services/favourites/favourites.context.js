import React, { useState, createContext, useContext, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

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
