import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const rows = [
    {id:0,text:'Bui Quoc Khiem'},
    {id:1,text:'Text'},
    {id:2,text:'Image'},
    {id:3,text:'ScrollView'},
    {id:4,text:'ListView'},
]
const extractKey = ({id}) =>id;

class DisplayFlatList extends Component{
    renderItem = ({item}) =>{
        return(
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }
    render(){
        return(
            <FlatList
            style={styles.container}
            data={rows}
            renderItem={this.renderItem}
            keyExtractor={extractKey}
            />
           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
    },
    row:{
        padding: 15,
        margin: 5,
        backgroundColor:'skyblue',
    }
});

export default DisplayFlatList;