import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Highlight from './Highlights/Highlights'
import Recommended from './Recommended/Recommended'

const highLightData = [
    {key:"1",company:"Victorious Infotech Pvt. Ltd.",location:"sector 34 noida Uttar Pradesh",
        content:"Your resume has been downloaded. Earn a skill badge to stand out even more",
        profile:"React Native App Developer",day:"1h",resume:"Resume downloaded"},
    {key:"2",company:"Xyz private Pvt. Ltd.",location:"sector 38 noida Uttar Pradesh",
       content:"Your resume has been downloaded. Earn a skill badge to stand out even more",
        profile:"IOS Application Developer",day:"5h",resume:"Application viewed"},
    {key:"3",company:"Alpha Tech  Pvt. Ltd.",location:"sector 5 noida Uttar Pradesh",
        content:"Your resume has been downloaded. Earn a skill badge to stand out even more",
        profile:"Reactjs Developer",day:"1d",resume:"Application viewed"},
    {key:"4",company:"Codiocity Technology",location:"Gurgaon, Haryana 122022",
        content:"Your resume has been downloaded. Earn a skill badge to stand out even more",
        profile:"Web Application Developer",day:"2d",resume:"Application viewed"},
    {key:"5",company:"Beta Pvt. Ltd.",location:"sector 36 noida Uttar Pradesh",
        content:"Your resume has been downloaded. Earn a skill badge to stand out even more",
        profile:"Reactjs Developer",day:"5d",resume:"Application viewed"},
    {key:"6",company:"Codio city Technology",location:"sector 8 noida Uttar Pradesh",
        content:"Your resume has been downloaded. Earn a skill badge to stand out even more",
        profile:"Android App Developer",day:"5d",resume:"Resume downloaded"},
    {key:"7",company:"Infotech Pvt. Ltd",location:"sector 8 noida Uttar Pradesh",
        content:"Your resume has been downloaded. Earn a skill badge to stand out even more",
        profile:"React Native Developer",day:"6d",resume:"Resume downloaded"},
    {key:"8",company:"Grozaa Pvt. Ltd.",location:"sector 37 noida Uttar Pradesh",
        content:"Your resume has been downloaded. Earn a skill badge to stand out even more",
        profile:"Web Developer",day:"7d",resume:"Application viewed"}
    ]
const recommendedData = [
    {key:"1",profile:"Junior Web Developer",company:"Solution Infotech",
        location:"Delhi, IN",promoted:true,duration:"1 days ago"},
    {key:"2",profile:"Android Developer",company:"Solution Infotech",
        location:"Delhi, IN",apply:"4 applicants",},
    {key:"3",profile:"React Developer",company:"Xyz Infotech Pvt. Ltd.",
        location:"Noida, IN",apply:"71 applicants",},
    {key:"4",profile:"React Developer",company:"Xyz Infotech Pvt. Ltd.",
        location:"Noida, IN",apply:"71 applicants",},
    {key:"5",profile:"React Native Developer",company:"J&F Infotech",
        location:"Delhi, IN",promoted:true,duration:"2 days ago"},
     {key:"6",profile:"Junior Web Developer",company:"Solution Infotech",
        location:"Delhi, IN",promoted:true,duration:"1 days ago"},
                        ]

export default function Job() {
    return (
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Highlight data={highLightData}/>
            <Recommended  data = {recommendedData}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{backgroundColor:"white"}
})
