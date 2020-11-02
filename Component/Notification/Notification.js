import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Notification() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>Recent</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
    textHead:{
        padding:10,
        backgroundColor:"white"
    }
})
