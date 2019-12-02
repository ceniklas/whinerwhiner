import React, { PureComponent } from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DefaultText from './DefaultText';

export default class PrimaryButton extends PureComponent<{style?: StyleProp<ViewStyle>, onPress: any},{}> {
  render() {
    // #D32B79  -> #B91559
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <LinearGradient colors={['#D32B79', '#B91559']} style={[styles.primaryStyle, this.props.style]}>    
          <DefaultText style={styles.buttonTextStyle}>
            {this.props.children}
          </DefaultText>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  primaryStyle: {
    alignSelf: 'flex-start',
    borderRadius: 32,
  },
  buttonTextStyle: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});