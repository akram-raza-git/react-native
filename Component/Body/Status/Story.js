import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function Story({image,story}) {
    return (
        <View style={styles.story}>
                    <View style={styles.imageStyle}>
                    <Image source={image} style={styles.image} />
                    </View>
                    <Text style={styles.text}>{story}</Text>
                </View>
    )
}

const styles = StyleSheet.create({
    story:{
        
        alignItems:"center",
        paddingRight:15,
    },
    image:{
        width:53,
        height:53,
         borderRadius:50,
         borderWidth:1,
         borderColor:"rgba(156, 156, 156,0.6)",
    },
    imageStyle:{
        width:62,
        height:62,
        borderRadius:50,
         borderWidth:3,
         borderColor:"#3367b0",
         alignItems:"center",
         justifyContent:"center",
    },
    text:{
        fontSize:13,
        paddingTop:7,
    }, 
})
