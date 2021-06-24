import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";
import open from "../../../assets/open";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;

export const IconRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconRowEnd = styled.View`
  flex-direction: row;
`;

export const LogoIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const StarIcon = () => <SvgXml xml={star} width={20} height={20} />;
export const OpenNowIcon = () => <SvgXml xml={open} width={20} height={20} />;
