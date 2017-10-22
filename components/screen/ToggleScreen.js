import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import { TabNavigator } from "react-navigation";
import DisplayToggle from "../toggle"

export default class ToggleScreen extends Component{
    render(){
        return (
            <View>
                 <DisplayToggle/>
            </View>
           
        )
    }
}