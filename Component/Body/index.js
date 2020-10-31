import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import PostCard from './PostCard/Postcard'
export default function index() {
    return (
        <View style={styles.container}>
          <PostCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:Dimensions.get("window").width,

    }
})
