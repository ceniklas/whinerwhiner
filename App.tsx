import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, ImageBackground, } from 'react-native';
import React, { Component, useState } from 'react';
import * as Font from 'expo-font';

import PrimaryButton from './src/components/PrimaryButton';

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

  renderWheel = () => {
    const persons = [
      {id: 0, name: 'Robin Bajsberg', rot: 0},
      {id: 1, name: 'Thom Båmbadill', rot: 0},
      {id: 2, name: 'Carrusellmanon', rot: 0},
      {id: 3, name: 'Nisse Pisse Ko', rot: 0},
      {id: 4, name: 'Bo', rot: 0},
      {id: 5, name: 'Lill-Erik', rot: 0},
    ];

    persons.forEach((p, idx) => {
      p.rot = (360/persons.length)*idx;
      const l = 75;
      p.name = p.name + new Array(l - p.name.length).join(' ')
    });

    return (
      <Animated.View style={[WhinerWhinerStylesheet.spinWheel,{ transform: [{ rotate: this.spinAnimation }] }]}>
        {persons.map(p => 
        <View key={p.id} style={{position:'absolute', transform: [{ rotate: `${p.rot}deg` }]}}>
          <Text style={[WhinerWhinerStylesheet.textStyle]}>{p.name}</Text>
        </View>)}
      </Animated.View>
    );
  }

  render() {
    return this.state.fontLoaded ? (
      <ImageBackground source={require('./assets/background.png')} style={WhinerWhinerStylesheet.container}>
        
        {/* {
          this.state.fontLoaded ? (
          <Text style={{ fontFamily: 'source-sans-pro-bold', fontSize: 56 }}>
            Nisse? Vem är Nisse??
          </Text>
          ) : null
        } */}

        {this.renderWheel()}

        <PrimaryButton style={{}}>Spin</PrimaryButton>
        <TouchableOpacity style={WhinerWhinerStylesheet.primaryButton} onPress={this.onPressButton}>
          <Text>Spin!</Text>
        </TouchableOpacity>
        
      </ImageBackground>
    ) : null;
  }
}

const WhinerWhinerStylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  primaryButton: {
    position: 'absolute',
    bottom: 60,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  spinWheel: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    height: 400,
    width: 400,
    borderRadius: 400,
    borderWidth: 2,
    borderColor: '#8545D3',
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'source-sans-pro-bold',
  },
});
