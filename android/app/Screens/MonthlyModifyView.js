import React, {useState} from "react";
import { Button, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from "react-native";
import TruffleLogo from "../assets/logo/TruffleLogo";
import CancelIcon from "../assets/icons/CancelIcon";
import ConfirmIcon from "../assets/icons/ConfirmIcon";
import XIcon from "../assets/icons/XIcon";

const MonthlyModifyView = ({navigation}) => {
  const [text, setText] = useState('');
  const inputWidth=Dimensions.get('window').width/1.3;
  const onChangeText =(inputText) => {
    setText(inputText);
  }

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
        />

      <TouchableOpacity>
          <XIcon style={{position:'absolute', zIndex:1, left:inputWidth-190, bottom:15}}/>
        </TouchableOpacity>
      </View> 

      <View style={Styles.BTNContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CancelIcon/>
        </TouchableOpacity>

        <TouchableOpacity>
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