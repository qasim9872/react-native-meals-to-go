import React from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantMenu } from "../components/restaurant-menu.component";

export const RestaurantDetailsScreen = ({
  route: { params: { restaurant } = {} } = {},
}) => {
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantMenu />
    </SafeArea>
  );
};
