import React from "react";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  IconRow,
  IconRowEnd,
  LogoIcon,
  StarIcon,
  OpenNowIcon,
} from "./restaurant-info-card.styles";

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
        <Text variant="label">{name}</Text>
        <IconRow>
          <Rating>
            {ratingArray.map((_, index) => (
              <StarIcon key={index} />
            ))}
          </Rating>
          <IconRowEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <OpenNowIcon />}
            </Spacer>
            <Spacer position="left" size="large">
              <LogoIcon source={{ uri: icon }} />
            </Spacer>
          </IconRowEnd>
        </IconRow>
        <Text variant="body">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
