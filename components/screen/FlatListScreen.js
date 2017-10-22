import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import { TabNavigator } from "react-navigation";
import DisplayFlatList from '../flatlist'

export default class FlatListScreen extends Component{
    render(){
        return (
            <DisplayFlatList/>                
        )
    }
}