import React, { Component } from 'react'
import { Text,Dimensions, View, FlatList, StyleSheet } from 'react-native'

export class Blue extends Component {
    render() {
        const color = ["#EE82EE","#DDA0DD","#9370DB","#9400D3","#D3D3D3","#C0C0C0","#696969",
      "#F5DEB3","#CD853F","#800080","#DA70D6","#6495ED","#ADD8E6"]
        return (<FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item=>item}
                    data={color}
                    renderItem={({item})=><View style={[styles.container,{backgroundColor:item}]}>
                <Text style={styles.text} > {item} </Text>
            </View>}
         />
      
        )
    }
}
const styles  = StyleSheet.create({
    container:{
        marginTop:15,
        width:Dimensions.get("window").width,
        height:150,  
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontStyle:"italic",
        fontWeight:"bold",
        fontSize:20,
    },
})
export default Blue
