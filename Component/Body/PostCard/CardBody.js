import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function CardBody({post,likes,comments,profile}) {
    return (
        <View style={styles.container}>
        <View style={styles.profileStyle}>
            <MaterialCommunityIcons name="account-outline" 
            onPress={()=>console.log(profile[0].name)}
                    size={32}
                    style={styles.profileIcon}
                    color="black" />
            <View style={styles.listStyle}>
                <FlatList data={profile}
                keyExtractor={item=>item.name} 
                renderItem={({item})=>
                <View>
                    
                    <Text 
                        style={{fontWeight:"bold",fontSize:15}} 
                        onPress={()=>console.log(item.name)}>{item.name}</Text>
                    <Text style={styles.profileText}>{item.content}</Text>
                    <Text style={styles.profileText}>{item.duration}</Text>
                </View>
                } 
                />
            </View>
        </View>
            <Text style={styles.postStyle}>{post}</Text>
               
            <View style={styles.emoStyle}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <SimpleLineIcons name="like" size={14} color="black" />
                <Text style={[styles.likeText,{paddingLeft:5}]}>{likes}</Text>
            </View>
                <Text style={styles.likeText}>{comments} comments</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingTop:5,
        paddingBottom:5,
    },
    emoStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        // backgroundColor:"red"
    },
    likeText:{
        color:"black",
        fontSize:12,
        opacity:0.6,
    },
    postStyle:{
        paddingHorizontal:5,
       
    },
    profileStyle:{
        flexDirection:"row",
         paddingBottom:10,
    },
    profileText:{
        fontSize:11,
    },
    profileIcon:{
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:50,
        width:50,
        height:50,
        paddingTop:10,

    },
    listStyle:{
        paddingLeft:10,
    }
})
