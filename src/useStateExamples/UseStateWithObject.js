import React from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';

const UseStateWithObject = () => {
  const [name, setName] = React.useState({firstName: '', lastName: ''});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.txtInput}
          placeholder={'firstName'}
          value={name.firstName}
          //   onChangeText={text => setName({firstName: text})}
          onChangeText={text => setName({...name, firstName: text})}
        />
        <TextInput
          style={styles.txtInput}
          placeholder={'lastName'}
          value={name.lastName}
          onChangeText={text => setName({...name, lastName: text})}
        />
      </View>
      <Text>{JSON.stringify(name)}</Text>
    </SafeAreaView>
  );
};

export default UseStateWithObject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputView: {flexDirection: 'row', width: '100%', height: 60},
  txtInput: {flex: 1, marginHorizontal: 3},
  button: {color: 'blue'},
});
