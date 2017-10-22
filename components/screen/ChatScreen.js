import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import {StackNavigator} from 'react-navigation';

export default class ChatScreen extends Component{
    static navigationOptions = {
      title: "Chat with me"
    };
    render(){
      return (
        <View>
          <Text>Hello Me</Text>
        </View>
      )
    }
}