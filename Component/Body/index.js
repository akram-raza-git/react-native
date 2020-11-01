import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import PostCard from './PostCard/Postcard'
export default function index() {
    
    const data = [
        {_id:1,
            profile:[
                {name:"Hacker Rank",content:"115,637 followers",duration:"5d"}],
                name:"Daniel Abrahams",comment:0,curious:0,like:1,comments:10,likes:101,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:2,
            profile:[
                {name:"Akram Raza",content:"Software Developer",duration:"1w"}],
                name:"Pranav Kumar Badal",like:0,comments:20,likes:200,comment:1,curious:0,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:3,
            profile:[
                {name:"Danish Khan",content:"Content Writer", duration:"3w"}],
                name:"Mohd Shahnawaz",like:0,comments:51,likes:130,comment:0,curious:1,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:4,
            profile:[
                {name:"Asim Khan",content:"ML Developer",duration:"4d"}],name:"Amir Aftab",like:1,comments:110,likes:20,comment:0,curious:0,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:5,
            profile:[
                {name:"Imran Akhtar",content:"Game Developer",duration:"3w"}],name:"Muskan Choudhary",like:0,comments:47,likes:59,comment:1,curious:0,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:6,
            profile:[
                {name:"Ruchi Dubey",content:"Deputy Manager",duration:'1d'}],name:"Huma khan",like:0,comments:59,likes:280,comment:1,curious:0,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:7,
            profile:[
                {name:"Kanika singh",content:"Senior Student Research Engineer",duration:"6d"}],name:"Ankur Dwivedi",like:1,comments:83,likes:330,comment:0,curious:0,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:8,
            profile:[
                {name:"Vishal Kumar",content:"Automation Analyst",duration:"5w"}],name:"Noorien khan",like:0,comments:113,likes:102,comment:0,curious:1,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:9,
            profile:[
                {name:"Amir Aftab",content:"Founder & CEO | Codiocity",duration:"3w"}],name:"Abhishek Gupta",like:1,comments:52,likes:119,comment:0,curious:0,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {_id:10,
            profile:[
                {name:"Vinay Paul",content:"Entrepreneur (Self-employed)",duration:"2d"}],name:"Rashi Chugh",like:0,comments:62,likes:710,comment:1,curious:0,
                post:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    ]
    return (
        <View style={styles.container}>
          <PostCard data={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:Dimensions.get("window").width,

    }
})
