import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => useContext(RestaurantContext);
