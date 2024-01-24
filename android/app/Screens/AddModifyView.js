import React from "react";
import { Button, View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";

function AddmodifyView () {
  return (
    <View style={Styles.container}>
      <Text style={Styles.Texts}>
        문자/알림 내역
      </Text>

      
    </View>
  );
}

const Styles = StyleSheet.create({
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
    //marginLeft: 22,
    marginLeft: Dimensions.get('window').width /3.5,
    marginTop: 50,
  },
})
export default AddmodifyView;