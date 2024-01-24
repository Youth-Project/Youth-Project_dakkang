import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import ToggleSwitch from './ToggleSwitch';

const AlarmItem = ({ alarm }) => {
  const [isAlarmOn, setAlarmOn] = useState(true); // 초기값을 알람이 켜진 상태로 설정

  const toggleAlarm = () => {
    setAlarmOn(!isAlarmOn);
    // TODO: 알람을 켜거나 끄는 로직 추가
  };

  return (
    <View style={styles.alarmItemContainer}>
      <Text style={{fontSize:23}}>{alarm.time}</Text>
      <Text>{alarm.days}</Text>
      <ToggleSwitch/>
    </View>
  );
};

const styles = StyleSheet.create({
  alarmItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
});

export default AlarmItem;