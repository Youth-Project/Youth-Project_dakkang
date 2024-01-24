import React, {useState, useEffect}  from "react";
import { Button, View, StyleSheet, Text, Dimensions, TouchableOpacity, Switch, ScrollView, Platform , Modal} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';
import AlarmList from '../components/AlarmList'; 

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const AlarmView = () => {
  const [isAlarmOn, setAlarmOn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState([false, false, false, false, false, false, false]);
  const [modalVisible, setModalVisible] = useState(false);
  const [alarms, setAlarms] = useState([]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleDayPress = (index: number) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[index] = !updatedSelectedDays[index];
    setSelectedDays(updatedSelectedDays);
  };

  const getTimeFromDate = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  const getSelectedDaysText = () => {
    const selectedDaysText = daysOfWeek
      .filter((day, index) => selectedDays[index])
      .join(', ');

    return selectedDaysText !== '' ? selectedDaysText : '날짜 반복이 없습니다';
  };

  const handleAddAlarm = () => {
    const time = getTimeFromDate(date);
    const daysText = getSelectedDaysText();

    // 새로운 알람 추가
    const newAlarms = [...alarms, { time, days: daysText }];
    setAlarms(newAlarms);

    console.log(`Selected Time: ${time}`);
    console.log(`Selected Days: ${daysText}`);

    // 알람을 스케줄링
    if (date) {
      PushNotification.localNotificationSchedule({
        message: '알람이 울립니다!',
        date: date,
      });
    }

    toggleModal();
  };

  const toggleAlarm = () => {
    setAlarmOn(!isAlarmOn);

    if (isAlarmOn) {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Texts}>Alarm</Text>
      <Text style={styles.Title}>내 알람</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={toggleModal}>
        <Text style={styles.buttonText}> +</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeaderText}>알람 설정</Text>
            <Text style={styles.modalInfoText}>효율적인 지출 관리</Text>

            <DatePicker
              date={date}
              mode="time"
              local='ko'
              title={null}
              onDateChange={setDate}
              androidVariant='iosClone'
            />

            <View style={styles.daysOfWeekContainer}>
              {daysOfWeek.map((day, index) => (
                <TouchableOpacity
                  key={day}
                  style={[styles.dayButton, { backgroundColor: selectedDays[index] ? 'lightblue' : 'white' }]}
                  onPress={() => handleDayPress(index)}
                >
                  <Text>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
              <TouchableOpacity
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={handleAddAlarm}>
                <Text style={styles.textStyle}>저장하기</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.buttonModal, styles.buttonClose]}
                onPress={toggleModal}>
                <Text style={styles.textStyle}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <AlarmList alarms={alarms} />
     
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#f8f9fa',
  },

  Texts: {
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 24,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 25,
    marginTop: 15,
  },

  button:{
    backgroundColor: '#FEA655',
    borderRadius: 50,
    width:54,
    height:54,
    marginTop:10,
    marginLeft:285,
    position: 'absolute',
    bottom: 150,
    left: 30,
    zIndex:1,

  },

  buttonText:{
    fontSize:50,
    color:'white'
  },

  Title:{
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 24,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 22,
    marginTop: 30,
  },

  alarms:{
    width: Dimensions.get('window').width - 15,
    height:60,
    color:'#D9D9D9'
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    backgroundColor: 'white',
    margin:20,
    padding:75,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#2196F3',
  },

  modalHeaderText: {
    color:'black',

  },
  modalInfoText: {
    marginTop:10,
    marginLeft:20,
    
  },

  daysOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  dayButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#FEA655',
    borderRadius: 5,
  },

  alarmInfoView:{
    marginTop:20,
    height: Dimensions.get('window').width - 30,
    backgroundColor:'blue',
  }
})


export default AlarmView;

