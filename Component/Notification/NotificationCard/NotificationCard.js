import React from 'react'
import { StyleSheet, 
        Text, 
        View,
        Dimensions,
        FlatList, 
        ScrollView,
        Image,
        TouchableOpacity,
        Button} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export default function NotificationCard({data}) {
  
    return (
    //    <ScrollView showsVerticalScrollIndicator={false}>
       <View style={{ paddingBottom:50}}>
       <FlatList 
           data={data}
           keyExtractor={(item)=>item.key}
           renderItem={({item})=>item.heading?
           <View  style={styles.container}>
                <Image style= {styles.image} source={item.image}/>
                    <View>
                        <Text style={styles.text}> 
                        {item.beforeHead}
                        <Text style={styles.heading}>{item.heading}</Text>
                        {item.after} </Text>
                    </View>
                    <View style={styles.rightIcon}>
                        <Entypo name="dots-three-vertical" size={14} color="#8f8f8f" />
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
            </View>:item.parah?
            <View style={styles.container} >
                    <FontAwesome name="newspaper-o" size={40} color="#537eb8" />
                    <View>
                    <Text style={styles.text}>{item.parah}</Text>
                    <Text style={styles.text}>{item.data}</Text>
                    </View>
                     <View style={styles.rightIcon}>
                        <Entypo name="dots-three-vertical" size={14} color="#8f8f8f" />
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
            </View>:item.buttonIs?
            <View style={styles.container}>
                    <Image style={[styles.image,{borderRadius:50}]} source={item.image} />
                    <View>
                        <Text style={[styles.text,{paddingTop:10}]}>{item.beforeHead}
                        <Text style={styles.heading}>{item.view}</Text></Text>
                        
                        <TouchableOpacity>
                            <Text style={styles.button}>SEE ALL VIEWS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightIcon}>
                        <Entypo name="dots-three-vertical" size={14} color="#8f8f8f" />
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
            </View>:
            <View style={styles.container} >
                <FontAwesome name="newspaper-o" size={40} color="#537eb8" />
                <View>
                    <Text style={styles.text}>{item.data}</Text>
                </View>
                      <View style={styles.rightIcon}>
                        <Entypo name="dots-three-vertical" size={14} color="#8f8f8f" />
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
            </View> }
       />
       </View>
    
    )
}
const styles = StyleSheet.create({
    container:{
        width:Dimensions.get("window").width,
        borderTopColor:"#ccc",
        borderTopWidth:1,
        backgroundColor:'white',
        padding:10,
        flexDirection:"row",
       
        
    },
    heading:{
        fontWeight:"bold",

    },
    text:{
        fontSize:13,
        paddingHorizontal:15,
        paddingTop:0,
        width:300
        
    },
    image:{
        width:50,
        height:50,
    },
    rightIcon:{
        color:"#8f8f8f",
    },
    date:{
        paddingVertical:10,
        fontSize:10
    },
    button:{
        borderWidth:1,
        borderColor:"#3367b0",
        color:"#3367b0",
        fontWeight:"bold",
        fontSize:15,
        width:150,
        textAlign:"center",
        paddingHorizontal:15,
        paddingVertical:4,
        alignSelf:"flex-start",
        marginHorizontal:15,
        marginVertical:10,
    }
})
