import React,{useState} from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function RecommendedCard({profile,company,apply,duration,location}) {
    const [show,setshow] = useState(false)
    return (
        <View style={styles.container}>
            <FontAwesome5 
                name="suitcase" 
                size={24} 
                style={styles.icon}
                color="black" />
                <View style={styles.subcontain}>
                    <Text>{profile} {!apply?
                        <Text style={styles.promote}> Promoted </Text>:null}</Text>
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
                    <TouchableOpacity style={styles.menu} onPress={()=>setshow(!show)}>
                                <Entypo name="dots-three-vertical" size={14} color="#8f8f8f" />
                    </TouchableOpacity>
                </View>
                    {show?<View style={styles.clickShow}><Text style={{ shadowColor: "#000", 
         shadowOffset: { width: 0, height: 2, }, 
         shadowOpacity: 0.25, }}>Hello</Text></View>:null}
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
     promote:{
         backgroundColor:"#d4cfcf",
         marginLeft:10,
         paddingHorizontal:5,
         paddingHorizontal:4,
     },
     clickShow:{
         position:"absolute",
         right:0,
         top:40,
         width:150,
     }
 
})
