import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ManageNetwork from './Manage/ManageNetwork'

export default function MyNetwork() {
    return (
        <View style={styles.container}>
            <ManageNetwork text="Manage my network"/>
            <ManageNetwork text="Invitations"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dedede"
    }
})
