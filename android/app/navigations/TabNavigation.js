import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import React, {useState} from 'react';
import { Button, View, StyleSheet, Text } from "react-native";
//import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Main from "../Screens/Main";
import CalendarView from "../Screens/CalendarView";
import RecipeView from "../Screens/RecipeView";
import SettingsView from "../Screens/SettingsView";

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
  const [showStackNav, setShowStackNav] = useState(false);
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
    
    <Tab.Screen name="Main" component={Main}   />
    <Tab.Screen name="CalendarView" component={CalendarView}  />
    <Tab.Screen name="RecipeView" component={RecipeView}  />
    <Tab.Screen name="SettingsView" component={SettingsView}  />
    </Tab.Navigator>
  );
};

export default TabNavigator;