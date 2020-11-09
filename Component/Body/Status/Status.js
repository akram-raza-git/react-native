import React from 'react'
import { StyleSheet, Text, View, FlatList,Image, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Story from './Story'
const StatusData = [
        {key:"1",image:require("../../../assets/CardImg/normal.jpeg"),story:"Stories"},
        {key:"2",image:require("../../../assets/CardImg/jok.jpeg"),story:"Joker clubs"},
        {key:"3",image:require("../../../assets/CardImg/pexelg.jpeg"),story:"Inaya akhtar"},
        {key:"4",image:require("../../../assets/CardImg/thou.jpeg"),story:"Thought of the day"},
        {key:"5",image:require("../../../assets/CardImg/bigChange.jpeg"),story:"Motivate"},
        {key:"6",image:require("../../../assets/CardImg/normal.jpeg"),story:"Pro Developer"},
        {key:"7",image:require("../../../assets/CardImg/avatar.jpg"),story:"Joker clubs"},
    ]

const stringChecker = (param,num) => {
    return param?.length>num ? param.substr(0,num-1)+"...":param
} 

export default function Status() {
    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            >
        <View style={styles.container}>
            <View style={[styles.story]}>
                    <Image source={require("../../../assets/download.png")} style={[styles.image,{borderColor:"#ccc",borderWidth:1}]} />
                        <View style={styles.plus}><Entypo name="plus" size={22} color="#0244a8" /></View>
                    <Text style={styles.text}>{stringChecker("Your story",10)}</Text>
                </View>
        <View>
        <FlatList data={StatusData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=><Story image={item.image}
                            story = {stringChecker(item.story,10)}
                            />
            }/>
        </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15,
        paddingVertical:8,
        flexDirection:"row",
        backgroundColor:"white"
    },
    story:{
        // width:60,
        alignItems:"center",
        paddingRight:15,
    },
    image:{
        width:60,
        height:60,
        borderRadius:50,
         borderWidth:1,
         borderColor:"rgba(156, 156, 156,0.6)"
    },
    text:{
        fontSize:13,
        paddingTop:7,
    }, 
    plus:{
        position:"absolute",
        right:13,
        bottom:20,
        backgroundColor: 'white',
        borderRadius:50,
        borderWidth:1,
        borderColor:"rgba(156, 156, 156,0.5)"
    }
})
