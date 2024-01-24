import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './android/app/navigations/TabNavigation';
//import StackNavigator from './android/app/navigations/StackNavigation';
import Main from "./android/app/Screens/Main";
import AddModifyView from "./android/app/Screens/AddModifyView";
import AlarmView from "./android/app/Screens/AlarmView";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PushNotification from 'react-native-push-notification';

const Stack = createNativeStackNavigator();

export default function App () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="AddModifyView" component={AddModifyView} />
          <Stack.Screen name="AlarmView" component={AlarmView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;