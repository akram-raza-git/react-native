import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import HighlightCard from './HighlightCard'

export default function Highlights({data}) {
   const [array,setArray] = useState([])

   useEffect(() => {
       if(data){
           setArray(data)
       }
       return () => data
   }, [])
   const deleteHandler = (key) => {
       let items = array.filter((item)=>{
           return item.key !== key
       }
       )
       setArray(items)
   }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.text}>Highlights </Text>
                <View style={{alignSelf:"center",paddingLeft:3,}}>
                    {array.length?<Text style={styles.highText}>{array.length} new</Text>:null}
                </View>
            </View>
                <View style={styles.card}>
                    <FlatList data={array} 
                        horizontal
                        nestedScrollEnabled
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item})=><HighlightCard 
                            head = {item.resume} 
                            day = {item.day}
                            company={item.company}
                            location={item.location}
                            profile = {item.profile}
                            content={item.content}
                            clicked={()=>deleteHandler(item.key)}
                            />
                    } />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        paddingLeft:10,
        backgroundColor:"#ccc",
        zIndex:5
    },
    text:{
        paddingVertical:10,
    },
    highText:{
        color:"white",
        backgroundColor:"red",
        borderColor:"white",
        borderRadius:30,
        borderWidth:2,
        fontSize:13,
        fontWeight:"bold",
        paddingHorizontal:7,
        paddingTop:2
    },
    card:{
        flexDirection:"row"
    }
 
})
