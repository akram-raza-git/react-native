import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

export default function instanceColor({title,increase,decrease}) {
    return (
        <View>
            <Text>{title}</Text>
            <Button 
                title="Increment"
                onPress={()=>increase()}                />
                <Text />
            <Button 
                title="Degrement"
                onPress={()=>decrease()}
                />
        </View>
    )
}

const styles = StyleSheet.create({})
