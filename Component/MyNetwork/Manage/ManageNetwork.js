import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
export default function ManageNetwork({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{text}</Text>
            <Ionicons name="ios-arrow-forward" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:12,
        backgroundColor:"white",
        marginBottom:8,
    },
    textStyle:{
        color:"#3367b0",
        fontSize:16,
    }
})
