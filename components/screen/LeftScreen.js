import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import { TabNavigator } from "react-navigation";
import Home from "../Home"

export default class ScreenLeft extends Component{
    render(){
        return (
            <View>
                 <Home/>
            </View>
        )
       
    }
}