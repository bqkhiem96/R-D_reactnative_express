import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import { TabNavigator } from "react-navigation";
import DisplayCounter from '../counter'

export default class RightScreen extends Component{
    render(){
        return <DisplayCounter/>
    }
}
