import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function CardBottom({liked}) {
    const IconColor = "black"
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={liked}>
            <View style={styles.element}>
                <AntDesign 
                    name="like2" 
                    size={22} 
                    color={IconColor} />
                <Text style={styles.textStyle}>Like</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>console.log("Comented")}>
            <View style={styles.element}>
                <MaterialIcons 
                    name="comment" 
                    size={22} 
                    color={IconColor} />
                <Text style={styles.textStyle}>Comment</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>console.log("Shared")}>
            <View style={styles.element}>
                <FontAwesome 
                    name="share" 
                    size={22} 
                    color={IconColor} />
                <Text style={styles.textStyle}>Share</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
                    onPress={()=>console.log("Send")}>
            <View style={styles.element}>
                <Feather 
                    name="send" 
                    size={22} 
                    color={IconColor} />
                <Text style={styles.textStyle}>Send</Text>
            </View>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    justifyContent:"space-around",
    paddingVertical:5,
    borderTopColor:"#ccc",
    borderTopWidth:1,
    },
    element:{
        alignItems:"center",
    },
    textStyle:{
        // paddingVertical:
    },
})
