import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from './SearchBar'

export default function SearchScreen() {
    const [item,setItem] = useState("")
    return (
        <View>
            <SearchBar value={item} 
                inputReturn={(item)=>setItem(item)} 
                    submitItem={()=>console.log("Submitted")} />

        </View>
    )
}

const styles = StyleSheet.create({})
