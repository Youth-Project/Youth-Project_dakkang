import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, ScrollView,Image, Dimensions } from "react-native";
import LineGraph from "../components/LineGraph";
import DonutChart from "../components/DonutChart";


/*
<FontAwesome5 name="bell" size={28} color="#99A5B3" marginTop= {74} marginLeft = {185}/>
<Ionicons name="md-alarm-outline" size={34} color="#99A5B3" marginTop= {70} marginLeft= {20}/>

*/
const Main = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ScrollView>
      <View style={{ flexDirection: 'row',}}>
        <Text style={Styles.Texts}>
          Truffle
        </Text>

        <TouchableOpacity onPress={()=>navigation.navigate('AddModifyView')}>
          <Text>Bell</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('AlarmView')}>
        <Text>Alarm</Text>
        </TouchableOpacity>
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
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 22,
    marginTop: 80,
  },
  Bell:{
    size: 50,
    color: "#99A5B3",
    marginTop: 80,
  }
})
export default Main;