import React,{useReducer, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Buttons from './Button'


// dispatch => call my Reducer
const reducer = (state,action) => {
    const {num} = state
    const {type,payload} = action
    switch (type) {
        case "Increase":
            return {...state,num:num+payload}
        case "Decrease":
            return {...state,num:num+payload}
        default:
            return state
    }
}
export default function counter() {
    const [state, dispatch] = useReducer(reducer, {num:0})
    const [counter,SetCounter] = useState(0)
    const {num} = state
    return (
        <View>
            <Buttons 
                change={()=>dispatch({type:"Increase",payload:1})}
                title="Increase"
            />
            <Buttons
                change = {()=>dispatch({type:"Decrease",payload:-1})}
                title="Decrease"
             />
            <Text style={styles.text}>{num}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    }
})
