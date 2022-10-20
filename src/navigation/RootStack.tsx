import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStack, StackRoutes } from "./types";
import { Comments } from "../screens/Comments";
import { Posts } from "../screens/Posts";
import { Todos } from "../screens/Todos";
const { Navigator, Screen } = createBottomTabNavigator<RootStack>();

export const RootStackRoutes: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Posts">
        <Screen name={StackRoutes.POSTS} component={Posts} />
        <Screen name={StackRoutes.COMMENTS} component={Comments} />
        <Screen name={StackRoutes.ALBUNS} component={Todos} />
      </Navigator>
    </NavigationContainer>
  );
};
