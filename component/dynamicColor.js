import React,{useState, useReducer} from 'react'
import { StyleSheet, Dimensions, Text, View } from 'react-native'
import Instance from './instanceColor'


// action => HowTOChangeAState
const reducer = (state,action) => {
    let {red,green,blue} = state
    let {type,payload} = action
    switch (type) {
        case "red":
            return red+payload > 255 || red+payload < 0 
            ? state : {...state,red:red+payload}
        case "green":
            return green+payload > 255 || green+payload < 0 
            ? state : {...state,green:green+payload}
        case "blue":
            return blue+payload > 255 || blue+payload < 0 
            ? state : {...state,blue:blue+payload}
        default:
            return state
    }
}

export default function dynamicColor() {
    const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0})
    let {red,green,blue} = state
    const colour = `rgb(${red}, ${green}, ${blue})`
    const IncreseBy = 10
    const DecreaseBy = -10
    return (
        <View style={{flex:1}}>
            <Instance 
                title="red" 
                    increase={()=>dispatch({type:"red",payload:IncreseBy})}
                    decrease = {()=>dispatch({type:"red",payload:DecreaseBy})}
                />
            <Instance 
                title="green" 
                increase={()=>dispatch({type:"green",payload:IncreseBy})}
                decrease = {()=>dispatch({type:"green",payload:DecreaseBy})}
                />
            <Instance 
                title="blue" 
                increase={()=>dispatch({type:"blue",payload:IncreseBy})}
                decrease = {()=>dispatch({type:"blue",payload:DecreaseBy})}
                />
                <Text />
                <View style={[styles.box,{backgroundColor:colour}]}>
                    <Text>{colour}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        width:Dimensions.get("window").width,
        height:150,
        justifyContent:"center",
        alignItems:"center",

    },
})
