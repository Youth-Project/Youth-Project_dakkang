import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import MainStackNavigation from "./MainStackNavigation";
import { NavigationContainer } from '@react-navigation/native';
import CalendarView from "../Screens/CalendarView";
import RecipeView from "../Screens/RecipeView";
import SettingsView from "../Screens/SettingsView";
import { StyleSheet } from 'react-native'; 

import OnHomeIcon from "../assets/icons/onHomeIcon";
import OnCalIcon from "../assets/icons/onCalIcon";
import OnRecipeIcon from "../assets/icons/onRecipeIcon";
import onSettingIcon from "../assets/icons/onSettingIcon";

import OffHomeIcon from "../assets/icons/offHomeIcon";
import OffCalIcon from "../assets/icons/offCalIcon";
import OffRecipeIcon from "../assets/icons/offRecipeIcon";
import OffSettingIcon from "../assets/icons/offSettingIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
  return (
    <NavigationContainer
	  independent = {true}>

    <Tab.Navigator
    initialRouteName="Main"
    screenOptions={{ headerShown: false, tabBarStyle: { height: 60, borderTopLeftRadius:15, borderTopRightRadius:15 }, }}
    >
    
    <Tab.Screen
    name="Main"
    component={MainStackNavigation}
    options={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        return (
          <OnHomeIcon/>
        );
      },
    })}
    />

    <Tab.Screen
    name="CalendarView"
    component={CalendarView}
    options={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        return (
          <OffCalIcon/>
        );
      },
    })}/>

    <Tab.Screen
    name="RecipeView"
    component={RecipeView}
    options={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        return (
          <OffRecipeIcon/>
        );
      },
    })}
    />
    <Tab.Screen
    name="SettingsView"
    component={SettingsView}
    options={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        return (
          <OffSettingIcon/>
        );
      },
    })}
    />
  </Tab.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    borderRadius:15,
  },
});

export default TabNavigator;