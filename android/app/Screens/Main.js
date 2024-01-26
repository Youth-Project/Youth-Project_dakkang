import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, ScrollView,Image, Dimensions } from "react-native";
import LineGraph from "../components/LineGraph";
import DonutChart from "../components/DonutChart";
import BellIcon from "../assets/icons/BellIcon";
import AlarmIcon from "../assets/icons/AlarmIcon";


const Main = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ScrollView>

      <View style={{flexDirection: 'row'}}>
        <Text style={Styles.Texts}>
          Truffle
        </Text>
      

        <View style={Styles.mainHeader}>
        <TouchableOpacity onPress={()=>navigation.navigate('AddModifyView')}>
          <BellIcon/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('AlarmView')}>
        <AlarmIcon/>
        </TouchableOpacity>
        </View>
      </View>

      <DonutChart/>
      <LineGraph />

      </ScrollView>
    </View>
  );
}

/*
     
      <Image source ={TruffleLogo}/>   
      
*/
const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#f8f9fa',
  },
  Texts: {
    color: '#474646',
    //font-family: NanumGothic,
    fontSize: 24,
    marginLeft: 22,
    marginTop: 80,
  },
  Bell:{
    size: 50,
    color: "#99A5B3",
    marginTop: 80,
  },
  mainHeader:{
    flexDirection: 'row',
    marginTop:80,
    marginLeft: 190,
    gap:15}
})
export default Main;