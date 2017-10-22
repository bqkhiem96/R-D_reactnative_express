import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import {StackNavigator} from 'react-navigation';

export default class HomeScreen extends Component{
    static navigationOptions = {
      title: 'Welcome'
    };
    render(){
      const {navigate} = this.props.navigation;
      return (
        <View>
          <Text>Hello, Chat App!</Text>
          <Button
            onPress={() => navigate('Chat')}
            title="Chat with Me"
          />
        </View>
      );
    }
  }