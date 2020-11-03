import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,ScrollView, FlatList,Button } from 'react-native'
import CardBottom from "./CardBottom"
import Head from './CardHead'
import CardBody from './CardBody'
export default function Postcard({data}) {
    const [datais,setData] = useState([])
    useEffect(() => {
        if(data){
            setData(data)
        }
        return () => {
            data
        }
    }, [])
    const like = "likes this"
    const comment = "commented on this"
    const curious = "is curious about this"
    const click = <Button title="Click" onPress={()=>console.log("100000")}/>
    return (
        <View style={styles.backStyle}>
        <FlatList data={datais} 
        keyExtractor={item=>item.name}
        renderItem={({item})=>(
                item.like?<View style={styles.container}>
                        <Head name={item.name} emotion={like} />
                            <CardBody post={item.post} 
                                image = {item.image}
                                profile = {item.profile}
                                likes={item.likes} 
                                comments={item.comments} />
                        <CardBottom />
                    </View>:item.curious? <View style={styles.container}>
                        <Head name={item.name} emotion={curious} />
                            <CardBody post={item.post} 
                                image = {item.image}
                                profile = {item.profile}
                                likes={item.likes} 
                                comments={item.comments} />
                        <CardBottom />
                    </View>:item.comment ? <View style={styles.container}>
                        <Head name={item.name} emotion={comment} />
                            <CardBody post={item.post} 
                                image = {item.image}
                                profile = {item.profile}
                                likes={item.likes} 
                                comments={item.comments}
                            />
                        <CardBottom />
                    </View>:null)
        } />
        
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:7,
        borderColor:"#ccc",
        borderTopWidth:1,
        borderBottomWidth:1,
        backgroundColor:"white"
    },
    backStyle:{
        backgroundColor:"#dedede",
    }
})
