import React from 'react'
import { Button, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function HighlightCard({head,day,content,profile,company,location,clicked}) {
    return (
        <View style={styles.container}>
            <View style={styles.cardHead}>
                <View style={styles.dot}/>
                <Text style={styles.headText}>{head}</Text>
                <Text style={styles.day}>{day}</Text>
                <TouchableOpacity style={styles.cross} 
                    onPress={clicked}>
                    <Entypo name="cross" size={20} 
                         color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={{color:"#000",}}>{content}.</Text>
                <View style={styles.imageCom}>
                    <Image style={styles.image}
                    source={require("../../../assets/CardImg/thou.jpeg")} />
                    <View style={{paddingHorizontal:10,}}>
                        <Text>{profile}</Text>
                        <Text style={styles.faded}>{company}</Text>
                        <Text style={styles.faded}>{location}</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <Button color="#0a5380"  
                    title="EARN SKILL BADGES"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        backgroundColor:"white",
        width:300,
        marginRight:15,
        height:230,
        marginBottom:10,
    },
    cardHead:{
        flexDirection:"row",
    },
    headText:{
        alignSelf:"center",
        fontWeight:"700",
        fontSize:14.5
    },
    dot:{
        width:12,
        height:12,
        backgroundColor:"#005a91",
        borderRadius:50,
        margin:10,
    },
    day:{
        alignSelf:"center",
        paddingHorizontal:7,
        color:"#666666",
    },
    cross:{
        position:"absolute",
        right:0,
        padding:6,
    },
    content:{
        paddingHorizontal:10,
        
    },
    button:{
        marginTop:29,
    },
    image:{
        width:50,
        height:50,
    },
    imageCom:{
        flexDirection:"row",
        paddingVertical:10,
    },
    faded:{
        color:"#666666",
        fontSize:12.5,
    }
})
