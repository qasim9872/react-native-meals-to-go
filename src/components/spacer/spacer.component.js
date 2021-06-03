import styled from "styled-components/native";

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

const getVariant = (theme, position = "top", size = "small") => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const sizeValue = theme.space[sizeIndex];
  return `${property}: ${sizeValue}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(theme, position, size)}
`;
