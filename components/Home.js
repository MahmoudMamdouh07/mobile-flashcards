import "react-native-gesture-handler";
import React from "react";
import Decks from "./Decks";
import AddDeck from "./AddDeck";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Decks") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "AddDeck") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Live") {
            iconName = focused ? "ios-speedometer" : "ios-pizza";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
  );
}
