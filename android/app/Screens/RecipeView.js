import React from "react";
import { Button, View, StyleSheet, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const RecipeView = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.Texts}>
        RecipeView page
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
    marginLeft: 22,
    marginTop: 80,
  },
})
export default RecipeView;