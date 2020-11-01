import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function CardBottom() {
    const IconColor = "black"
    return (
        <View style={styles.container}>
            <View style={styles.element}>
                <AntDesign 
                    onPress={()=>console.log("Liked")}
                    name="like2" 
                    size={22} 
                    color={IconColor} />
                <Text style={styles.textStyle}>Like</Text>
            </View>
            <View style={styles.element}>
                <MaterialIcons 
                    name="comment" 
                    onPress={()=>console.log("Comented")}
                    size={22} 
                    color={IconColor} />
                <Text style={styles.textStyle}>Comment</Text>
            </View>
            <View style={styles.element}>
                <FontAwesome 
                    name="share" 
                    size={22} 
                    onPress={()=>console.log("Shared")}
                    color={IconColor} />
                <Text style={styles.textStyle}>Share</Text>
            </View>
            <View style={styles.element}>
                <Feather 
                    name="send" 
                    size={22} 
                    onPress={()=>console.log("Send")}
                    color={IconColor} />
                <Text style={styles.textStyle}>Send</Text>
            </View>
            
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
