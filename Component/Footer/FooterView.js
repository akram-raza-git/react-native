import React from 'react'
import { StyleSheet, Text, View, Footer, FooterTab, Button,Dimensions } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FooterView({navigation}) {
    console.log(navigation)
    const IconColour = "black"
    return (
        <View style={styles.container}>
            <View style={styles.IconPack} >
                <SimpleLineIcons name="home" 
                    size={20} 
                    color={IconColour} 
                    onPress={()=>console.log("Home pressed")} 
                    />
                <Text style={styles.textStyle}>Home</Text>
            </View>
            <View style={styles.IconPack}>
                <FontAwesome5 
                    name="user-friends" 
                    size={20} 
                    color={IconColour} 
                    onPress={()=>console.log("My Network pressed")}
                    />
                <Text style={styles.textStyle}>My Network</Text>
            </View>
            <View style={styles.IconPack}>
                <Ionicons 
                    name="ios-add-circle-outline" 
                    size={22} 
                    color={IconColour} 
                     onPress={()=>console.log("Post pressed")}   
                    />
                <Text style={styles.textStyle}>Post</Text>
            </View>
            <View style={styles.IconPack}>
                <MaterialIcons 
                    name="notifications" 
                    size={22} 
                    color={IconColour}
                    onPress={()=>console.log("Notification pressed")}
                     />
                <Text style={styles.textStyle}>Notifications</Text>
            </View>
            <View style={styles.IconPack}>
                <MaterialCommunityIcons 
                    name="bag-checked" 
                    size={22} 
                    color={IconColour}
                    onPress={()=>console.log("Jobs pressed")}
                     />
                <Text style={styles.textStyle}>Jobs</Text>
            </View>
        </View>
   
    )
}

const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor:"#ccc",
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"white",
        paddingTop:5,
        opacity:.7,
    },
    IconPack:{
        alignItems:"center",

    },
    textStyle:{
        fontSize:12.7
    }
})
