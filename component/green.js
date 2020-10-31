import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'

export class green extends Component {
    render() {
        const color = ["#EE82EE","#DDA0DD","#9370DB","#9400D3","#D3D3D3","#C0C0C0","#696969",
      "#F5DEB3","#CD853F","#800080","#DA70D6","#6495ED","#ADD8E6"]
        return (
          
         <FlatList 
         style={styles.scrollView}
         keyExtractor={(item)=>item}
         horizontal
         showsHorizontalScrollIndicator={false}
         data={color} 
         renderItem={({item})=><View style={[styles.container,{backgroundColor:item}]}>
                        <Text style={styles.text}>{item}</Text>
                        </View>}
                />
      
        )
    }
}
const styles  = StyleSheet.create({
    container:{
        margin:15,
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row-reverse",
    },
    text:{
         fontWeight:"bold"
    },
    scrollView:{
        height:400,
    }
})
export default green
