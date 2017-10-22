import React, {Component} from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import { TabNavigator } from "react-navigation";
import LeftScreen from './LeftScreen';
import RightScreen from './RightScreen';
import ToggleScreen from './ToggleScreen';
import FlatListScreen from './FlatListScreen'


const MainScreenNavigator = TabNavigator({
  Left: { screen: LeftScreen },
  Right: { screen: RightScreen },
  Toggle: { screen: ToggleScreen },
  Flat: { screen: FlatListScreen },
  Flat: { screen: FlatListScreen }
});

export default MainScreenNavigator;