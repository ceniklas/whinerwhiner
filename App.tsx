import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, ImageBackground, } from 'react-native';
import React, { Component, useState } from 'react';
import * as Font from 'expo-font';

import PrimaryButton from './src/components/common/PrimaryButton';
import { LinearGradient } from 'expo-linear-gradient';
import SpinWheel from './src/components/SpinWheel';

export default class App extends Component<{}, {}> {
  
  state = {
    fontLoaded: false,
  };

  componentDidMount = async () => {
    await this.loadFonts();
    this.setState({ fontLoaded: true });
  }

  async loadFonts() {
    await Font.loadAsync({
      'source-sans-pro-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
      'source-sans-pro-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    });
  }

  spinWheel = () => {}

  render() {
    return this.state.fontLoaded ? (
      <LinearGradient colors={['#2A126C', '#140A40']} style={WhinerWhinerStylesheet.container}>

        {/* <ImageBackground source={require('./assets/background.png')} style={WhinerWhinerStylesheet.container}> */}
          
          {/* <SpinWheel spinWheel={this.spinWheel}/> */}

          <PrimaryButton onPress={this.spinWheel}>Spin</PrimaryButton>
          
        {/* </ImageBackground> */}
        
      </LinearGradient>
    ) : null;
  }
}

const WhinerWhinerStylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
});
