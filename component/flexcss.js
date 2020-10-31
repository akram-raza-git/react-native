import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function flexcss() {
    return (
        <View style={styles.container}>
            <View style={styles.child1}>
                <Text style={{color:"white"}}>One</Text>
            </View>
            <View style={styles.child2}>
                <Text style={{color:"white"}}>Two</Text>
            </View>
            <View style={styles.child3}>
                <Text style={{color:"white"}}>Three</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:"red",
        height:300,

    },
    child1:{
       flex:1,
        borderWidth:2,
        borderColor:"black",
        backgroundColor:"rgb(100,100,100)",
        
    },
    child2:{
       flex:1,
        borderWidth:2,
        borderColor:"black",
        backgroundColor:"red",
        // alignSelf:"flex-end",
        // ...StyleSheet.absoluteFillObject
      
    },
    child3:{
       flex:1,
        borderWidth:2,
        borderColor:"black",
        backgroundColor:"rgb(50,50,50)",
    },
})
