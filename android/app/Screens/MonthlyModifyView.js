import React, {useState} from "react";
import { Button, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Alert, Modal } from "react-native";
import TruffleLogo from "../assets/logo/TruffleLogo";
import CancelIcon from "../assets/icons/CancelIcon";
import ConfirmIcon from "../assets/icons/ConfirmIcon";
import XIcon from "../assets/icons/XIcon";

//  <AMInfoAlert Visible={exceptionModal} toggleException={toggleException}/>

const MonthlyModifyView = ({navigation}) => {
  const [text, setText] = useState('');
  const inputWidth=Dimensions.get('window').width/1.3;
  const onChangeText =(inputText) => {
    const numValue = inputText.replaceAll(',', '');
    inputText = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
    setText(inputText);
  }
  const [exceptionModal, setExceptionModal] = useState(false);
  const toggleException = () => {
    setExceptionModal(!exceptionModal);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.ComponentContainer}>
      <TruffleLogo/>
      </View>
      
      <View style={[Styles.ComponentContainer, {marginTop:80}]}>
        <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="0 원"
        style={Styles.InputStyle}
        width={inputWidth}
        justifyContent='center'
        keyboardType="number-pad"
        input='search'
        />

      <TouchableOpacity onPress={() => setText("")}>
          <XIcon style={{position:'absolute', zIndex:1, left:inputWidth-190, bottom:15}}/>
        </TouchableOpacity>
      </View> 

      <View style={Styles.BTNContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CancelIcon/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {
          if (text === '') {
            Alert.alert('금액 누락', '한 달 목표 금액을 입력하거나 취소 버튼을 클릭해주세요',[
              {
                text: '확인'
              }
            ]);
          } 
          else{
            navigation.goBack()}
          }}>
          {/* 백엔드로 전달하기*/}
          <ConfirmIcon/>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#f8f9fa',
  },
  InputStyle: {
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 18,
    alignItems:"center",
    justifyContent:"center",
    borderColor:'grey',
    borderBottomWidth :1,
    textAlign: 'center',
  },
  ComponentContainer:{
    alignItems:'center',
    marginTop:50
  },
  BTNContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:40,
    marginTop:380
  }
})
export default MonthlyModifyView;