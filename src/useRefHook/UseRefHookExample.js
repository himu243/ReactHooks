import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput} from 'react-native';

const UseRefHookExample = () => {
  const [txtVal, setTxtVal] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <View
      style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
      <TextInput ref={inputRef} value={txtVal} onChangeText={setTxtVal} />
    </View>
  );
};

export default UseRefHookExample;
