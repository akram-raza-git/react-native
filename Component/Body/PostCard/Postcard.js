import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import CardBottom from "./CardBottom"
import Head from './CardHead'
import CardBody from './CardBody'
export default function Postcard() {
    const like = "likes this"
    const comment = "commented on this"
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Head name="Daniel Abrahams" like={like} />
                <CardBody />
            <CardBottom />
        </View>
        <View style={styles.container}>
            <Head name="Abraham Khan" like={comment} />
                <CardBody />
            <CardBottom />
        </View>
        <View style={styles.container}>
            <Head name="Akram Raza" like={comment} />
                <CardBody />
            <CardBottom />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        borderColor:"#ccc",
        borderTopWidth:1,
        borderBottomWidth:1,
    }
})
