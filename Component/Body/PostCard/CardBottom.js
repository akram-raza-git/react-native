import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function CardBottom() {
    return (
        <View style={styles.container}>
            <View style={styles.element}>
                <AntDesign name="like2" size={30} color="white" />
                <Text>Like</Text>
            </View>
            <View style={styles.element}>
                <MaterialIcons name="comment" size={30} color="white" />
                <Text>Comment</Text>
            </View>
            <View style={styles.element}>
                <FontAwesome name="share" size={24} color="black" />
                <Text>Share</Text>
            </View>
            <View style={styles.element}>
                <Feather name="send" size={24} color="black" />
                <Text>Send</Text>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{flexDirection:"row",
    justifyContent:"space-around",
    paddingVertical:5,
    },
    element:{
        alignItems:"center"
    }
})
