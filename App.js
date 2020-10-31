import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import SearchScreen from './Component/Search/SearchScreen'
import FooterView from './Component/Footer/FooterView'
import Index from './Component/Body/index'



export default function App() {
  return (
    <View style={styles.appContainer}>
      <SearchScreen />
      <Index />
      <FooterView />
    </View>
  )
}

const styles = StyleSheet.create({
 appContainer:{
   height:Dimensions.get("window").height,
  marginTop:40,
 }
})
