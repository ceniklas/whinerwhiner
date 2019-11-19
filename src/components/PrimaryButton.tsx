import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class PrimaryButton extends PureComponent<{style: any},{}> {
  render() {
    // #D32B79  -> #B91559
    return (
      <LinearGradient colors={['#D32B79', '#B91559']} style={styles.primaryStyle}>    
        <Text style={[styles.defaultTextStyle, this.props.style]}>
          {this.props.children}
        </Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  // ... add your default style here
  primaryStyle: {
    borderRadius: 32,
  },
  defaultTextStyle: {
    color: '#fff',
    letterSpacing: 0.32,
    fontSize: 24,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});