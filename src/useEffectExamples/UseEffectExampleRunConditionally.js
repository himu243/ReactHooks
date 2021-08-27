import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const UseEffectExampleRunConditionally = () => {
  const [count, setCount] = useState(0);
  const [txtTestComp, setTxtTestComp] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: `${count}`,
    });
  }, [count, navigation]);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>{'Update NavTitle Hooks'}</Text>
      </TouchableOpacity>
      <TextInput
        style={{marginTop: 20, height: 50, width: '90%'}}
        placeholder={'Type here'}
        value={txtTestComp}
        onChangeText={text => setTxtTestComp(text)}
      />
    </View>
  );
};
export default UseEffectExampleRunConditionally;
