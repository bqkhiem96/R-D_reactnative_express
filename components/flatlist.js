import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

const rows = [
    {id:0,text:'Chu be Khiem'},
    {id:1,text:'Chu be Dat'},
    {id:2,text:'Chu be Phu'},
    {id:3,text:'Chu be Vinh'},
    {id:4,text:'Chu be Khiem'},
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
        backgroundColor:'blue',
    }
});

export default DisplayFlatList;