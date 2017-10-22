import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'
import {StackNavigator} from 'react-navigation';

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});

// class SimpleApp extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello Simple App</Text>
//       </View>
//     )
//   }
// }

export default SimpleApp;
