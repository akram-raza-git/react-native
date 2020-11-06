import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function CardHead({name,emotion}) {
    return (
        <View style={styles.container}>
            <Text> 
                <Text 
                    style={styles.nameStyle} 
                    onPress={()=>console.log(name)}>{name} </Text> {emotion}
            </Text>
            <Ionicons 
                name="ios-arrow-down" 
                size={24} 
                color="black"  
                    style={styles.arrowIcon}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:5,
        paddingVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomColor:"#ccc",
        borderBottomWidth:1
    },
    nameStyle:{
        fontSize:15,
        fontWeight:"bold",
    },
    arrowIcon:{
        marginRight:15
    }
})
