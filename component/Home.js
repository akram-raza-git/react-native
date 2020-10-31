import React from 'react'
import { Button } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function Home({navigation}) {
    return (
        <View>
            <Button title="Counter" onPress={()=>navigation.push("Counter")}/>
            <Text />
            <Button title="Colour" onPress={()=>navigation.push("Colour")}/>
            <Text />
            <Button title="Row Colour" onPress={()=>navigation.push("Green")}/>
            <Text />
            <Button title="random colour" onPress={()=>navigation.push("RandomColour")}/>
            <Text />
            <Button title="Dynamic Colour" onPress={()=>navigation.push("DynamicColour")}/>
            <Text />
            <Button title="Flex css" onPress={()=>navigation.navigate('Flexcss')}/>
            <Text />
            <Button title="Input user" onPress={()=>navigation.navigate('Inputuser')}/>
            <Text />
            
        </View>
    )
}

const styles = StyleSheet.create({})
