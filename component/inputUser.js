import React,{useState, useReducer} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const reducer = (state,action) => {
    switch (action.type) {
        case "username":
            return {...state,username:action.payload}
        case "password":
            return {...state,password:action.payload}
        default:
            return state
    }
}

export default function inputUser() {
    const [state, dispatch] = useReducer(reducer, {username:"",password:""})
    return (
        <View>
            <Text>Enter Username :</Text>
            <TextInput 
                style={styles.input}
                onChangeText={event=>dispatch({type:"username",payload:event})}
                autoCapitalize="none"
                placeholder="Name..."
                autoCorrect={false}  />
            <Text>Enter Password :</Text>
             <TextInput 
                style={styles.input}
                onChangeText={event=>dispatch({type:"password",payload:event})}
                autoCapitalize="none"
                placeholder="Password..."
                secureTextEntry
                autoCorrect={false}  />
            <Text style={styles.ShowText}>Your name is {state.username} and password is {state.password}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        padding:10,
        fontSize:15,
        fontWeight:"bold",
        margin:15,
        borderColor:"black",
        borderWidth:1,
    },
    ShowText:{
        fontSize:20,
        fontWeight:"bold",
    }
})
