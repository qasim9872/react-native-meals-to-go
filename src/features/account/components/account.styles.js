import styled from "styled-components/native";
import backgroundImage from "../../../../assets/home_bg.jpg";

export const AccountBackground = styled.ImageBackground.attrs({
  source: backgroundImage,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
