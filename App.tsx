import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, } from 'react-native';
import * as Font from 'expo-font';

export default class App extends Component<{}, {}> {
  spinValue;
  spinAnimation;

  state = {
    fontLoaded: false,
  };
  
  componentWillMount = () => {
    this.spinValue = new Animated.Value(0);
    this.spinAnimation = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'source-sans-pro-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  spinMe = () => {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.exp),
      }
    ).start()
  }

  onPressButton = () => {
    this.spinMe()
  }

  render() {
    return (
      <View style={WhinerWhinerStylesheet.container}>
        
        {
          this.state.fontLoaded ? (
          <Text style={{ fontFamily: 'source-sans-pro-bold', fontSize: 56 }}>
            Nisse? Vem är Nisse??
          </Text>
          ) : null
        }

        <Animated.View style={[
          WhinerWhinerStylesheet.redBox,
          { transform: [{ rotate: this.spinAnimation }] }
        ]}>

        </Animated.View>

        <TouchableOpacity style={WhinerWhinerStylesheet.primaryButton} onPress={this.onPressButton}>
          <Text>Spin!</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const WhinerWhinerStylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  primaryButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'cyan',
  },
  redBox: {
    height: 150,
    width: 150,
    backgroundColor: 'red',
  },
});
