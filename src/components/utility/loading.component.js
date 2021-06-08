import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

export const Loading = styled(ActivityIndicator).attrs({
  animating: true,
  color: Colors.red800,
  size: 50,
})`
  flex: 1;
  margin-left: -25px;
`;
