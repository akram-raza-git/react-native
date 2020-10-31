
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Red from './component/Header'
import Colour from './component/colour'
import Green from './component/green'
import RandomColour from './component/randomColor'
import DynamicColour from './component/dynamicColor'
import Counter from './component/counter'
import Inputuser from './component/inputUser'
import Flexcss from './component/flexcss'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native"
import Home from './component/Home' 

const Stack = createStackNavigator()
export default function App() {
  let array = ["#EE82EE","#DDA0DD","#9370DB","#9400D3","#D3D3D3","#C0C0C0","#696969",
      "#F5DEB3","#CD853F","#800080","#DA70D6","#6495ED","#ADD8E6"]
  return (<NavigationContainer>
                <View >
                  <Red color={array[Math.floor(Math.random()*array.length)]} />
                  
                </View> 
                <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Counter" component={Counter} />
                  <Stack.Screen name="Colour" component={Colour}  />
                  <Stack.Screen name="Green" component={Green} /> 
                  <Stack.Screen name="RandomColour" component={RandomColour} />
                  <Stack.Screen name="DynamicColour" component={DynamicColour} />
                  <Stack.Screen name="Flexcss" component={Flexcss} />
                  <Stack.Screen name="Inputuser" component={Inputuser} />

                </Stack.Navigator>
         </NavigationContainer>
  );
}