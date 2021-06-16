import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { useLocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchBar = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => setSearchKeyword(keyword), [keyword]);

  const onChangeSearch = (searchQuery) => setSearchKeyword(searchQuery);
  const onSubmitSearch = () => search(searchKeyword);

  return (
    <SearchBarContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggled}
        placeholder="Search for a location"
        value={searchKeyword}
        onChangeText={onChangeSearch}
        onSubmitEditing={onSubmitSearch}
      />
    </SearchBarContainer>
  );
};
