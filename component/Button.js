import React from 'react'
import { StyleSheet,Text , View, Button } from 'react-native'

export default function Buttons({title,change}) {
    return (
        <View>
            <Button 
            title={title}
            onPress={()=>change()}
             />
            <Text />
        </View>
    )
}

const styles = StyleSheet.create({})
