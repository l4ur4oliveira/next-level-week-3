import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Orphanage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olar!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    color: '#00F',
    fontFamily: 'Nunito_800ExtraBold'
  }
});
