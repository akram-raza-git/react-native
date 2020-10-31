import React,{useState} from 'react'
import { StyleSheet, Text, View,Button,FlatList } from 'react-native'

export default function randomColor() {
    let [colour,setColour] = useState([])
    return (
        <View>
            <Button 
                title="Random colour" 
                onPress={()=>
                setColour([...colour,randomColour()])}
            />
                <FlatList 
                    // style={styles.displayBoxes}
                        data={colour} 
                        keyExtractor={item=>item}
                        renderItem={({item})=><View style={[styles.box,{backgroundColor:item}]}></View>}  
                    />
        </View>
    )
}
let randomColour = () => {
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    return `rgb(${red}, ${green}, ${blue})`
}
const styles = StyleSheet.create({
    box:{
        width:100,
        height:100
    },
    displayBoxes:{
        flexDirection:"row",
        
    }
})
