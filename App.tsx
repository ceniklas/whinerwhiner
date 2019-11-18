import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, } from 'react-native';

export default class App extends Component<{}, {}> {
  spinValue;
  spinAnimation;
  componentWillMount = () => {
    this.spinValue = new Animated.Value(0);
    this.spinAnimation = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
  }
  spinMe = () => {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 3,
        duration: 2000,
        easing: Easing.inOut(Easing.exp),
      }

    )
      .start()

  }
  onPressButton = () => {
    this.spinMe()

  }
  render() {
    return (
      <View style={WhinerWhinerStylesheet.container}>

        <Text>Nisse? Vem är Nisse??</Text>

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
