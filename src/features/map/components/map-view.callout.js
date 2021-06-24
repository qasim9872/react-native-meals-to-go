import React from "react";
import { CompactRestaurantInfoCard } from "../../../components/restaurant/compact-restaurant-info-card.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfoCard isMap restaurant={restaurant} />
);
