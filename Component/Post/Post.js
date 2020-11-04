import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Post() {
    return (
        <View style={styles.conatainer}>
            <Text>Post</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer : {
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
    }
})
