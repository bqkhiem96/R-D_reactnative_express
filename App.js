import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
// import DisplayCounter from './components/counter'
// import DisplayToggle from './components/toggle'
// import MyScrollView from './components/scrollview'
// import DisplayFlatList from './components/flatlist'
// import DisplaySectionList from './components/sectionlist'
import List from './components/List'
import Input from './components/Input'
import Title from './components/Title'

export default class App extends Component { 
  state = {
    participants:[
      'Bui Quoc Khiem',
      'Pham Tran Tuan Dat',
      'Nguyen Pham Huy Khiem',
      'Tran Duc Vinh',
       'Tran Ngoc Phu'
    ]
  }
  onAddParticipant = (text)=>{
    const {participants} = this.state;
    this.setState({
      participants:[text,...participants],
    })
  }
  onRemoveParticipant = (index)=>{
    const {participants} = this.state;
    this.setState({
      participants: participants.filter((participant,i)=>i!==index),
    })
  }
    render(){
      const {participants} = this.state;
      return(
        <View>
          <Title>
            Chat participants
          </Title>
          <Input 
          placeholder={'type a name and hit enter'}
          onSubmitEditing={this.onAddParticipant}
          />
          <List
            list={participants}
            onPressItem={this.onRemoveParticipant}
          />
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
