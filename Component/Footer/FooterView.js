import React from 'react'
import { StyleSheet, Text, View, Footer, FooterTab, Button,Dimensions } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FooterView() {
    return (
        
        <View style={styles.container}>
         <SimpleLineIcons name="home" size={30} color="white" />
         <FontAwesome5 name="user-friends" size={30} color="white" />
         <Ionicons name="ios-add-circle-outline" size={35} color="white" />
         <MaterialIcons name="notifications" size={30} color="white" />
         <MaterialCommunityIcons name="bag-checked" size={35} color="white" />
        </View>
   
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white"
    }
})
