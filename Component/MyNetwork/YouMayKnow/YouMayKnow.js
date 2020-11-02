import React from 'react'
import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native'
import Card from './Card/Card'


export default function YouMayKnow({heading,item}) {
    return (
        <View style={styles.container}> 
            <Text style={styles.headText}>{heading}</Text>
                <View style={styles.cardsStyle}>
                    {
                    item.map((item,index)=><Card key={index} item={item}/> 
                    )
                    }
                    
                </View>
            
            <View style={styles.textView}>
                <Text style={styles.seeText}>SEE ALL</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:10,
        marginBottom:8,
    },
    seeText:{
        alignSelf:"center",
        paddingVertical:15,
        color:"#3367b0",
        fontSize:16
    },
    textView:{
    },
    cardsStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap"
    },
    headText:{
        fontSize:16,
        paddingVertical:5,
    }
})
