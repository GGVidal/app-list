import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStack, StackRoutes } from "./types";
import { Weather } from "../screens/Weather";
import { Home } from "../screens/Home";
const { Navigator, Screen } = createBottomTabNavigator<RootStack>();

export const RootStackRoutes: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Posts">
        <Screen name={StackRoutes.POSTS} component={Home} />
        <Screen name={StackRoutes.COMMENTS} component={Weather} />
        <Screen name={StackRoutes.ALBUNS} component={Weather} />
      </Navigator>
    </NavigationContainer>
  );
};
