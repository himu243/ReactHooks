import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HookCounter2 = () => {
  const initialState = 0;
  const [count, setCount] = React.useState(initialState);
  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1) --> Problem
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Count: ${count}  `}</Text>
      <TouchableOpacity onPress={() => setCount(prevCount => prevCount + 1)}>
        <Text style={styles.button}>{'Increment  '}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(prevCount => prevCount - 1)}>
        <Text style={styles.button}>{'Decrement  '}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={increment5}>
        <Text style={styles.button}>{'Increment5  '}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(initialState)}>
        <Text style={styles.button}>{'Reset'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HookCounter2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {color: 'blue'},
});
