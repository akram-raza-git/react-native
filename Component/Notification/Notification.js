import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NotificationCard from './NotificationCard/NotificationCard'
import { FontAwesome } from '@expo/vector-icons';

const notificationData = [
    {key:12,beforeHead:"Zayn Ahamed ",buttonis:"SEE ALL VIEWS",heading:"viewed your profile",date:"2h",
        image:require('../../assets/CardImg/normal.jpeg')},
     {key:11,beforeHead:"Vaibhav dubey, your new connection, recently",
        heading:" shared a post ",after:" you may be interested in.",
        date:"4h",image:require('../../assets/CardImg/avatar.jpg')},
     {key:10,parah:"DAILY RUNDOWN: TUESDAY",date:"5h",
        data:"The company showed a strong rebound across all businesses in the September 2020 quarter"},
    {key:9,date:"1d",
        data:"RIL’s balance sheet is strong with a net cash position of Rs 10256 (post assuming recent fund raising of Rs 25,0519 crore)"},
    {key:8,beforeHead:"Subham keshari, your new connection, recently",
        heading:" shared a post ",after:" you may be interested in.",
        date:"1d",image:require('../../assets/CardImg/avatar.jpg')},
     {key:7,beforeHead:"Ayesha Khan ",buttonis:"SEE ALL VIEWS",heading:"viewed your profile",date:"1d",
        image:require('../../assets/CardImg/pexelg.jpeg')},
    {key:1,beforeHead:"Khush Mohd, your new connection, recently",
        heading:" shared a post ",after:" you may be interested in.",
        date:"2d",image:require('../../assets/CardImg/avatar.jpg')},
    {key:2,beforeHead:"You appeared in",
        heading:" 10 searches ",after:"this week",date:"4d",
        image:require('../../assets/CardImg/thou.jpeg')},
    {key:3,parah:"DAILY RUNDOWN: MONDAY",date:"4d",
        data:"More millennials are buying homes, Covid-19 is fuelling internal hiring, and other top news for you"},
    {key:4,beforeHead:"Rahul Khanna ",buttonis:"SEE ALL VIEWS",heading:"viewed your profile",date:"7d",
        image:require('../../assets/CardImg/jok.jpeg')},
    {key:5,date:"1w",
        data:"You can ask for a raise even during the pandamic. Here's how to do is right."},
    {key:6,beforeHead:"Raj Anand, your new connection, recently",heading:" shared a post ",
        after:" you may be interested in.",date:"1w",image:require('../../assets/CardImg/avatar.jpg')},
    ]

export default function Notification() {
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>Recent</Text>
            <NotificationCard  data={notificationData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    textHead:{
        backgroundColor:"white",
        padding:10,

    }
})
