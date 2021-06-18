import React from "react";
import { CompactRestaurantInfoCard } from "../../../components/components/compact-restaurant-info-card.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfoCard isMap restaurant={restaurant} />
);
