import React, { Component } from 'react'
import { Text,Dimensions, Button, TouchableOpacity,View, StyleSheet } from 'react-native'


export default class test extends Component {
  render() {
    return (<View>
          <View style={[styles.container,{backgroundColor:this.props.color}]} >
          <Text style={styles.text}>HEADER</Text>
          </View>
    
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    width:Dimensions.get("window").width,
    height:120,
    alignItems:"center",
    justifyContent:"center",
    marginTop:25,
  },
  text:{
    fontSize:30,
    fontWeight:"bold",
  },
  touchable:{
    backgroundColor:"#DDA0DD",
    textAlign:"center",
    paddingVertical:10,
    alignItems:"center",
    color:"white",
  }
})