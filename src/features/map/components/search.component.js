import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { useLocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 50px;
  width: 100%;
`;

export const SearchBar = () => {
  const { keyword, search } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => setSearchKeyword(keyword), [keyword]);

  const onChangeSearch = (searchQuery) => setSearchKeyword(searchQuery);
  const onSubmitSearch = () => search(searchKeyword);

  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onChangeText={onChangeSearch}
        onSubmitEditing={onSubmitSearch}
      />
    </SearchBarContainer>
  );
};
