/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import { initializeApp } from '@react-native-firebase/app';

// Firebase 설정 객체
const firebaseConfig = {
  // Firebase 설정
};

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);


// Push Notification 초기화
PushNotification.configure({
  onNotification: function (notification) {
    // 알림이 수신될 때 처리
    console.log('Notification received:', notification);
  },
});

AppRegistry.registerComponent(appName, () => App);
