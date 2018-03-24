import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/counter'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> WORK:  </Text> 
        <Counter />
        <Text> REST:  </Text> 
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
   
  },
});
