import React, { PureComponent } from 'react';
import { Text, StyleSheet, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class DefaultText extends PureComponent<{style?: StyleProp<TextStyle>},{}> {
  render = ()  => (
    <Text style={[styles.defaultTextStyle, this.props.style]}>
      {this.props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: 'source-sans-pro-regular',
    color: '#fff',
    letterSpacing: 0.32,
    fontSize: 24,
  },
});