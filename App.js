import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inputs from './src/Components/Inputs';
import Render from './src/Components/Render';
import Heading from './src/Components/Heading';

export default function App() {
  return (
    <View style={styles.container}>
      <Heading/>
      <Render/>
      <View style={styles.result}>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },

  input: {
    flex:4,
    
  },
  inputText: {
    color:'white',
    paddingLeft:20,
    fontSize:30,

  }
});
