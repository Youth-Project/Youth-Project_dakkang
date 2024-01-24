import React from 'react';
import { View, Text, StyleSheet, Button,ScrollView } from 'react-native';
import AlarmItem from './AlarmItem'; // 경로에 맞게 수정

const AlarmList = ({ alarms }) => {
  const sortedAlarms = alarms.slice().sort((a, b) => {
    const timeComparison = a.time.localeCompare(b.time);
    return timeComparison !== 0 ? timeComparison : b.days.length - a.days.length;
  });

  return (
    <View>
    {sortedAlarms.map((alarm, index) => (
      <View key={index} style={styles.savedInfoContainer}>
        <AlarmItem alarm={alarm} />
      </View>
    ))}
  </View>
    
  );
};



const styles = StyleSheet.create({
  savedInfoContainer: {
    backgroundColor:'white',
    height:70,
    borderColor:'grey',
    borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
})


export default AlarmList;