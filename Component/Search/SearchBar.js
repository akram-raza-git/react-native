import React,{ useState} from 'react'
import { StyleSheet, TextInput, Text, View ,Image, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Content from '../SIdeDrawer/index'



export default function home({value,inputReturn,submitItem}) {
    const [open,setOpen] = useState(false)

    
    return (<View style={styles.outerSearch}>
                {open?<Content open={()=>setOpen(false)} />:null}
                <TouchableOpacity  onPress={()=>setOpen(true)}>
                    <Image 
                        source={require("../../assets/download.png")}
                        style={styles.profileImage}
                        /> 
                </TouchableOpacity>
                   
                <View style={styles.searchBar} >
                    <Feather 
                        name="search" 
                        size={25} 
                        style={styles.feature}
                        color="black" />
                    <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={value}
                        onChangeText={inputReturn}
                        onEndEditing={submitItem}
                        style={styles.input}
                        placeholder="Search"
                        />
                    <FontAwesome 
                        onPress={()=>console.log("QR Code")}
                        style={styles.barCode}
                        name="qrcode" size={27} 
                        color="black" />
                </View>
                    <Entypo 
                        style={styles.chat}
                        onPress={()=>console.log("Chat Pressed")}
                        name="chat" 
                        size={27} 
                        color="white" />
        </View>
    )
}
const styles = StyleSheet.create({
    searchBar:{
        backgroundColor:"white",
        flexDirection:"row",
        height:30,
        flex:1,
        borderRadius:3.2,
        alignSelf:"center",
        opacity:.95,
    },
    feature:{
        alignSelf:"center",
        marginHorizontal:5,
    },
    input:{
        flex:1,
        fontSize:20,
        paddingHorizontal:5,
    },
    barCode:{
        alignSelf:"center",
        marginHorizontal:10,
    },
    outerSearch:{
        backgroundColor:"#0073B1",
        height:41,
        flexDirection:"row"
    },
    chat:{
        marginHorizontal:10,
        alignSelf:"center",
    },
    profileImage:{
        marginTop:2,
        marginHorizontal:5,
        width:35,
        height:35,
        borderWidth:2,
        borderColor:"white",
        borderRadius:50,
        alignSelf:"center"
    }

})
