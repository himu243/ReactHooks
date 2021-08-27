import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function UseStateWithArray() {
  const [items, setItems] = useState([]);
  const addNumber = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={addNumber}>
        <Text>{'Add a Number'}</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={item => item.id.toString()}
        style={styles.list}
        data={items}
        renderItem={({item}) => <Text>{item.value}</Text>}
      />
    </SafeAreaView>
  );
}

export default UseStateWithArray;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {flex: 1},
});
