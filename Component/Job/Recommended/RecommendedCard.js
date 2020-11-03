import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function RecommendedCard({profile,company,apply,duration,location}) {
    return (
        <View style={styles.container}>
            <FontAwesome5 
                name="suitcase" 
                size={24} 
                style={styles.icon}
                color="black" />
                <View style={styles.subcontain}>
                    <Text>{profile}</Text>
                    <Text>{company}</Text>
                    <Text>{location}</Text>
                    {apply?<View>
                                <View style={{flexDirection:"row"}}>
                                <Feather name="clock" size={22} color="#119e37" />
                                <Text style={{paddingLeft:10,alignSelf:"center"}}>Be an early applicant</Text> 
                                
                                </View>
                            
                             <Text style={styles.apply}>{apply}</Text>
                            </View>:<View style={styles.linked}>
                                <Text>{duration}</Text>
                                <AntDesign name="linkedin-square" 
                                    style={{paddingHorizontal:6}}
                                    size={20} color="#005a91" />
                                <Text>Easy Apply</Text>
                            </View>}
            <View style={styles.menu}>
                <Entypo name="dots-three-vertical" size={14} color="#8f8f8f" />
            </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    icon:{ 
        padding:10,
    },
    subcontain:{
        padding:10,
         borderBottomColor:"#ccc",
         width:"100%",
        borderBottomWidth:1,
     },
     apply:{
         fontSize:13,
         color:"#119e37"
     },
     linked:{
         flexDirection:"row",
     },
     menu:{
         position:"absolute",
         right:50,
         padding:15

     },
 
})
