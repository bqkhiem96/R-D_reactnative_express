import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
// import DisplayCounter from './components/counter'
// import DisplayToggle from './components/toggle'
// import MyScrollView from './components/scrollview'
// import DisplayFlatList from './components/flatlist'
// import DisplaySectionList from './components/sectionlist'
// import Home from './components/Home'
// import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation';
import MainScreenNavigator from './components/screen/MainScreenNavigator';

export default class App extends Component { 
    render(){
      return(
        <MainScreenNavigator/>
      )
    } 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

