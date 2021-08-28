import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HookCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>{`Count: ${count}`}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HookCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
