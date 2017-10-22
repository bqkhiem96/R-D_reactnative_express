import React, { Component } from 'react'
import { AppRegistry, View, Text, TouchableOpacity, StyleSheet } from 'react-native'


class Toggle extends Component{
    onPress = (option) => {
        const {onChange} = this.props;
        onChange(option);
    }
    renderOption = (option) => {
        const {value} = this.props
    
        return (
          <TouchableOpacity
            style={[styles.option, option === value && styles.activeOption]}
            onPress={this.onPress.bind(this, option)}
          >
            <Text style={styles.text}>
              {option}
            </Text>
          </TouchableOpacity>
        )
      }
    render() {
        const {label, options} = this.props
    
        return (
          <View style={styles.containerToggle}>
            <Text style={[styles.text, styles.label]}>
              {label}
            </Text>
            <View style={styles.optionsContainer}>
              {options.map(this.renderOption)}
            </View>
          </View>
        )
      }
}

class DisplayToggle extends Component{
    state = {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
    render(){
        const {flexDirection,justifyContent,alignItems} = this.state;
        const layoutStyle = {flexDirection,justifyContent,alignItems};
        const primaryAxis = flexDirection === "row"? 'Horizontal' : 'Vertical';
        const secondaryAxis = flexDirection === "row"? 'Vertical' : 'Horizontal';
        return (
            <View style={styles.containerToggle}>
              <Toggle
                label={'Primary axis (flexDirection)'}
                value={flexDirection}
                options={['row', 'column']}
                onChange={(option) => this.setState({flexDirection: option})}
              />
              <Toggle
                label={primaryAxis + ' distribution (justifyContent)'}
                value={justifyContent}
                options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
                onChange={(option) => this.setState({justifyContent: option})}
              />
              <Toggle
                label={secondaryAxis + ' alignment (alignItems)'}
                value={alignItems}
                options={['flex-start', 'center', 'flex-end', 'stretch']}
                onChange={(option) => this.setState({alignItems: option})}
              />
              <Text>Dit me Phu</Text>
              <View style={[styles.layout, layoutStyle]}>
                <View style={styles.box} />
                <View style={styles.box} />
                <View style={styles.box} />
                <Text>Dit me Phu</Text>
              </View>
            </View>
          )
    }
      
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    layout: {
      // flex: 1,
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    box: {
      padding: 25,
      backgroundColor: 'steelblue',
      margin: 5,
    },
    containerToggle: {
        flexDirection: 'column',
        paddingBottom: 20,
      },
      text: {
        fontSize: 14,
      },
      label: {
        padding: 4,
      },
      optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      option: {
        padding: 4,
        backgroundColor: 'whitesmoke',
      },
      activeOption: {
        backgroundColor: 'skyblue',
      },
})

export default DisplayToggle;
