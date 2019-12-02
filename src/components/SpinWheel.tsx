import React, { PureComponent } from 'react';
import { Text, StyleSheet, TouchableOpacity, StyleProp, TextStyle, Animated, View, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DefaultText from './common/DefaultText';

export default class SpinWheel extends PureComponent<{style?: StyleProp<TextStyle>},{}> {
  spinValue: Animated.Value;
  spinAnimation: Animated.AnimatedInterpolation;

  persons: { id: number; name: string; rot: number; }[];
  
  componentWillMount() {
    this.persons = [
      {id: 0, name: 'Robin Bajsberg', rot: 0},
      {id: 1, name: 'Thom Båmbadill', rot: 0},
      {id: 2, name: 'Carrusellmanon', rot: 0},
      {id: 3, name: 'Nisse Pisse Ko', rot: 0},
      {id: 4, name: 'Bo', rot: 0},
      {id: 5, name: 'Lill-Erik', rot: 0},
    ];
  
    this.persons.forEach((p, idx) => {
      p.rot = (360/this.persons.length)*idx;
      const l = 75;
      p.name = p.name + new Array(l - p.name.length).join(' ')
    });

    this.spinValue = new Animated.Value(0);
    this.spinAnimation = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '1890deg']
    });
  }

  spinWheel = () => {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 6000,
        easing: Easing.out(Easing.exp),
      }
    ).start()
  }

  render() {
    return (
      <Animated.View style={[styles.spinWheel,{ transform: [{ rotate: this.spinAnimation }] }]}>
        {this.persons.map(p => 
        <View key={p.id} style={{position:'absolute', transform: [{ rotate: `${p.rot}deg` }]}}>
          <DefaultText>{p.name}</DefaultText>
        </View>)}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  spinWheel: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    height: 600,
    width: 300,
    borderRadius: 600,
    borderWidth: 2,
    borderColor: '#8545D3',
  },
});