import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList,Image, Dimensions } from 'react-native'
import { MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';


export default function CardBody({post,likes,comments,profile,image}) {

    const [More,setMore] = useState(false)
      function truncate(str,n) {
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    return (
        <View style={styles.container}>
        <View style={styles.profileStyle}>
            <MaterialCommunityIcons name="account-outline" 
            onPress={()=>console.log(profile[0].name)}
                    size={32}
                    style={styles.profileIcon}
                    color="black" />
            <View style={styles.listStyle}>
            
                {/* <FlatList data={profile}
                    keyExtractor={(item)=>{item._id}} 
                    renderItem={({item})=> */}
                <View>
                    <Text 
                        style={{fontWeight:"bold",fontSize:15}} 
                        onPress={()=>console.log(profile[0])}>{profile[0]}</Text>
                    <Text style={styles.profileText}>{profile[1]}</Text>
                    <Text style={styles.profileText}>{profile[2]}</Text>
                </View>
              {/*  } 
                /> */}
            </View>
        </View>
            {post && More?<Text style={styles.postStyle}>{post}</Text>:
                <Text style={styles.postStyle}>{truncate(post,135)}<Text style={{color:"#636363"}} 
                                onPress={()=>setMore(true)}> see more </Text></Text>}
                          
                {image?<Image style={styles.postImage} source={image} />:null}
               
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
        paddingTop:5,
        paddingBottom:5,
    },
    emoStyle:{
        paddingHorizontal:10,
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
        paddingHorizontal:10,
        
    },
    profileStyle:{
        flexDirection:"row",
        paddingHorizontal:10,
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
    },
    postImage:{
        height:500,
        width:Dimensions.get("window").width,
        marginVertical:10,

    }
})
