import React from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const Accordion = ({ title, icon, menuItems }) => {
  return (
    <List.Accordion
      title={title}
      left={(props) => <List.Icon {...props} icon={icon} />}
    >
      {menuItems.map((menuItem) => (
        <List.Item key={menuItem} title={menuItem} />
      ))}
    </List.Accordion>
  );
};

export const BreakfastAccordion = ({ menuItems = [] }) => {
  return <Accordion title="Breakfast" icon="muffin" menuItems={menuItems} />;
};

export const LunchAccordion = ({ menuItems = [] }) => {
  return <Accordion title="Lunch" icon="hamburger" menuItems={menuItems} />;
};

export const DinnerAccordion = ({ menuItems = [] }) => {
  return <Accordion title="Dinner" icon="food" menuItems={menuItems} />;
};

export const RestaurantMenu = () => {
  return (
    <ScrollView>
      <List.Section>
        <BreakfastAccordion menuItems={["Chai Paratha", "Porridge"]} />
        <LunchAccordion menuItems={["Huel", "Fried Eggs"]} />
        <DinnerAccordion menuItems={["Nuggets", "Lentils", "Bombay Aloo"]} />
      </List.Section>
    </ScrollView>
  );
};
