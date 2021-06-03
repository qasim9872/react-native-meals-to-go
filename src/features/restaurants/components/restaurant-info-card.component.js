import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  line-height: ${(props) => props.theme.lineHeights.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  line-height: ${(props) => props.theme.lineHeights.copy};
`;

const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;

const IconRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconRowEnd = styled.View`
  flex-direction: row;
`;

const Spacer = styled.View`
  padding-left: ${(props) => props.theme.space[2]};
`;

const LogoIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

const TextLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  line-height: ${(props) => props.theme.lineHeights.copy};
  color: ${(props) => props.theme.colors.ui.error};
`;

const StarIcon = () => <SvgXml xml={star} width={20} height={20} />;
const OpenNowIcon = () => <SvgXml xml={open} width={20} height={20} />;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "My Default Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    rating = 4,
    address = "My random street",
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(rating));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <IconRow>
          <Rating>{ratingArray.map(StarIcon)}</Rating>
          <IconRowEnd>
            {isClosedTemporarily && (
              <TextLabel variant="label">CLOSED TEMPORARILY</TextLabel>
            )}
            <Spacer />
            {isOpenNow && <OpenNowIcon />}
            <Spacer />

            <LogoIcon source={{ uri: icon }} />
          </IconRowEnd>
        </IconRow>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
