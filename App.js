import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import DisplayCounter from './components/counter'
import DisplayToggle from './components/toggle'

export default class App extends Component { 
  render() {
    return (
      <View style={styles.container}>
        <DisplayCounter/> 
        {/* <DisplayToggle/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// AppRegistry.registerComponent('App', () => App)
