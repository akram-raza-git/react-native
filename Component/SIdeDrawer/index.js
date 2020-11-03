import React from 'react'
import { StyleSheet, Text, View,Dimensions, Button } from 'react-native'


export default function index({open}) {
    return (
        <View style={[styles.container,{height:Dimensions.get("window").height}]}>
            <Text >SideDrawer</Text>
           <Button title="close" onPress={open}/>
           <Button  title='open' />
           <Button  title='open' />
           <Button  title='open' />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor:"red",
        zIndex:100,
        width:330,
    }
})
