import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import { color } from 'react-native-reanimated'

export default function Card({item}) {

    return (
        <View style={styles.container}>
        {item.picture?<Image 
                style={styles.image}
                source={require(`../../../../assets/CardImg/avatar.jpg`)}
                 />:null}
            <Text style={[styles.text,{fontWeight:"bold",fontSize:16}]}>{item.name}</Text>
            <Text style={styles.text}>{item.prof}</Text>
            <Text style={[styles.text,{marginTop:4}]}>{item.mutual}</Text>
            {item.connect?<TouchableOpacity><Text style={styles.textButton}>CONNECT</Text></TouchableOpacity>:
            <TouchableOpacity><Text style={styles.textButton}>FOLLOW</Text></TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:200,
        paddingVertical:10,
        width:180,
        marginBottom:10,
        borderColor:"#ccc",
        borderWidth:1,
    },
    textButton:{
        borderWidth:1,
        borderColor:"#3367b0",
        color:"#3367b0",
        fontWeight:"bold",
        fontSize:15,
        width:120,
        textAlign:"center",
        paddingHorizontal:15,
        paddingVertical:4,
        alignSelf:"center",
        marginTop:5,
    },
    image:{
        width:75,
        height:75,
        borderRadius:50,
        alignSelf:"center",
    },
    text:{
        alignSelf:"center",
        textAlign:"center",
        fontSize:13
    }
})
