/*
import "react-native-gesture-handler";
import React, {useState} from 'react';
import { Button, View, StyleSheet, Text } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from "../Screens/Main";
import AddModifyView from "../Screens/AddModifyView";
import AlarmView from "../Screens/AlarmView";

const Stack = createNativeStackNavigator();

const StackNavigator = ()=>{
  const [showStackNav, setShowStackNav] = useState(false);
  return (
    <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="AddModifyView" component={AddModifyView} />
        <Stack.Screen name="AlarmView" component={AlarmView} />
      </Stack.Navigator>
  );
};

export default StackNavigator;
*/