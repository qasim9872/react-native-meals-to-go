import React, { useState, createContext, useContext } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("London");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
          setIsLoading(false);
          setLocation(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, keyword, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => useContext(LocationContext);
