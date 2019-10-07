import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Nisse? Vem är Nisse?</Text>
      
      <View style={styles.redBox}></View>
      
      <View style={styles.buttonWrapper}>
        <Text>
          Spin!
        </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonWrapper: {
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
