import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (theme, position, size) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const sizeValue = theme.space[sizeIndex];
  return `${property}: ${sizeValue}`;
};

export const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position = "top", size = "small", children }) => {
  const theme = useTheme();
  const variant = getVariant(theme, position, size);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};
