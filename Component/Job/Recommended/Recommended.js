import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Rcard from './RecommendedCard'

export default function Recommended({data}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>Recommended for you </Text>
           
                <FlatList data={data}
                    keyExtractor={item=>item.key}
                    scr
                    renderItem={({item})=><Rcard 
                                    profile={item.profile}
                                    company={item.company}
                                    location={item.location}
                                    duration={item.duration}
                                    apply={item.apply}
                                    promoted={item.promoted} />}
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:10,
    },
    textHead:{
        paddingVertical:13,
    },
})
