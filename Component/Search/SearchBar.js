import React from 'react'
import { StyleSheet, TextInput, Text, View ,Image} from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function home({value,inputReturn,submitItem}) {
    return (<View style={styles.outerSearch}>
                <Image 
                    source={require("../../assets/download.png")}
                    style={styles.profileImage}
                    /> 
                <View style={styles.searchBar} >
                    <Feather 
                        name="search" 
                        size={30} 
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
                        style={styles.barCode}
                        name="qrcode" size={30} 
                        color="black" />
                </View>
                    <Entypo 
                        style={styles.chat}
                        name="chat" 
                        size={30} 
                        color="white" />
        </View>
    )
}
const styles = StyleSheet.create({
    searchBar:{
        backgroundColor:"white",
        margin:10,
        flexDirection:"row",
        height:40,
        flex:1
    },
    feature:{
        alignSelf:"center",
        marginHorizontal:10,
    },
    input:{
        flex:1,
        fontSize:25,
        paddingHorizontal:5,
    },
    barCode:{
        alignSelf:"center",
        marginHorizontal:10,
    },
    outerSearch:{
        backgroundColor:"#0073B1",
        height:60,
        flexDirection:"row"
    },
    chat:{
        marginHorizontal:10,
        alignSelf:"center",
    },
    profileImage:{
        margin:10,
        width:40,
        height:40,
        borderWidth:2,
        borderColor:"white",
        borderRadius:50,
        alignSelf:"center"
    }

})
