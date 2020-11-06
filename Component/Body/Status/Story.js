import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function Story({image,story}) {
    return (
        <View style={styles.story}>
                    <Image source={image} style={styles.image} />
                    <Text style={styles.text}>{story}</Text>
                </View>
    )
}

const styles = StyleSheet.create({
    story:{
        // width:60,
        alignItems:"center",
        paddingRight:15,
    },
    image:{
        width:60,
        height:60,
        borderRadius:50,
         borderWidth:1,
         borderColor:"rgba(156, 156, 156,0.6)",
         
    },
    text:{
        fontSize:13,
        paddingTop:7,
    }, 
})
