import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native'
import SearchScreen from './Component/Search/SearchScreen'
import Index from './Component/Body/index'
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MyNetwork from "./Component/MyNetwork/MyNetwork"
import Post from './Component/Post/Post'
import Notification from './Component/Notification/Notification'
import Job from './Component/Job/Job'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator()
export default function App() {
  

  return (<View style={styles.appContainer}>
            <SearchScreen />
          <NavigationContainer>
            <BottomTab.Navigator initialRouteName={Index}>
              <BottomTab.Screen name="Home" component={Index} options={{
                tabBarLabel: 'Home',
                tabBarIcon:({color,size})=>(
                    <SimpleLineIcons name="home" 
                    size={20} 
                    color={color} 
                    />
                ) 
                  }}/>
              <BottomTab.Screen name="MyNetwork" component={MyNetwork} options={{
                tabBarLabel:"My Network",
                tabBarIcon:({color,size})=>(
                  <FontAwesome5 
                    name="user-friends" 
                    size={20} 
                    color={color} 
                    />
                )
              }}

              />
              <BottomTab.Screen name="Post" component={Post} options={{
                tabBarLabel:"Post",
                tabBarIcon:({color,size})=>(
                  <Ionicons 
                    name="ios-add-circle-outline" 
                    size={22} 
                    color={color}  
                    />
                )
              }}

              />
              <BottomTab.Screen name="Notification" component={Notification} options={{
                tabBarLabel:"Notification",
                tabBarIcon:({color,sixe})=><MaterialIcons 
                    name="notifications" 
                    size={22} 
                    color={color}
                     />
              }}/>
              <BottomTab.Screen name="Job" component={Job} options={{
                tabBarLabel:'Job',
                tabBarIcon:({color,size})=>(
                  <MaterialCommunityIcons 
                    name="bag-checked" 
                    size={22} 
                    color={color}
                     />
                )
              }} />
            </BottomTab.Navigator>
          </NavigationContainer>
          </View>
         
  )
}

const styles = StyleSheet.create({
 appContainer:{
   height:Dimensions.get("window").height,
  marginTop:35,
 },


})
