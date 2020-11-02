import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import ManageNetwork from './Manage/ManageNetwork'
import YouMayKnow from './YouMayKnow/YouMayKnow'

const data1 = [
    {name:"Mohd Areeb Khan",
        prof:"Student at Jamia Hamdard",
        follow:false,connect:true,
        picture:`../../../../assets/CardImg/avatar.jpg`,
        mutual:"3 mutual connections"},
    {name:"Uzaifa Khan",
        prof:"B.Tech CSE Student",
        follow:false,connect:true,
        picture:`../../../../assets/CardImg/avatar.jpg`,
        mutual:"22 mutual connections"},
    {name:"Aiman Zehra",
        prof:"Student",follow:false,connect:true,
        picture:`../../../../assets/CardImg/avatar.jpg`,
        mutual:"7 mutual connections"},
    {name:"Anas Saifi",prof:"Entrepreneur",
        follow:false,connect:true,
        picture:`../../../../assets/CardImg/avatar.jpg`,
        mutual:"37 mutual connection"},
]

const data2 = [
    {name:"Sony",
        prof:"Electronics Company",
        connect:false,follow:true,
        picture:`../../../../assets/CardImg/Outdoor.jpg`,
        mutual:"36,669 members"},
    {name:"Dell",
        prof:"Laptops",
        connect:false,follow:true,
        picture:`../../../../assets/CardImg/Outdoor.jpg`,
        mutual:"85,187 members"},
    {name:"Sumsung India",
        prof:"Mobiles",connect:false,follow:true,
        picture:`../../../../assets/CardImg/Outdoor.jpg`,
        mutual:"129,497 members"},
    {name:"Uber",
        prof:"Cab services",connect:false,follow:true,
        picture:`../../../../assets/CardImg/Outdoor.jpg`,
        mutual:"1,962,989 members"},
    ]


export default function MyNetwork() {
    return (<ScrollView 
                showsVerticalScrollIndicator={false}
            style={styles.scroll}>

        <View style={styles.container}>
            <ManageNetwork text="Manage my network"/>
            <ManageNetwork text="Invitations"/>
            <YouMayKnow heading="Industry leader in india you may know" item={data1}/>
            <YouMayKnow heading="Groups you may be intrested in" item={data2} />
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dedede"
    },
    scroll:{
        
    }
})
