import React, {Component} from 'react';
import {Keyboard, TextInput, View, Text} from 'react-native';
import {useEffect, useState} from 'react/cjs/react.development';
import UseKeyboardVisibility from '../CustomHookExample/UseKeyboardVisibility';

// class UseEffectExampleOnlyOnce extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       txt: '',
//       isKeyboardVisible: false,
//     };
//   }
//   componentDidMount() {
// this.keyboardDidShowListener = Keyboard.addListener(
//   'keyboardDidShow',
//   () => {
//     this.setState({isKeyboardVisible: true});
//   },
// );
// this.keyboardDidHideListener = Keyboard.addListener(
//   'keyboardDidHide',
//   () => {
//     this.setState({isKeyboardVisible: false});
//   },
// );
//   }
//   componentWillUnmount() {
//     this.keyboardDidShowListener.remove();
//     this.keyboardDidHideListener.remove();
//   }
//   render() {
// return (
//   <View style={{flex: 1}}>
//     <TextInput
//       style={{marginTop: 20, height: 50, width: '90%'}}
//       placeholder={'Type here'}
//       value={this.state.txt}
//       onChangeText={text => this.setState({txt: text})}
//     />
//     <Text style={{marginTop: 20}}>
//       {`isKeyboardVisible: ${this.state.isKeyboardVisible}`}
//     </Text>
//   </View>
// );
//   }
// }

const UseEffectExampleOnlyOnce = () => {
  // const [isKeyboardVisible] = UseKeyboardVisibility(); // Using Custom Hooks, You have to comment out the entire useEffect Hooks
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [txt, setTxt] = useState('');

  useEffect(() => {
    console.log('Use Effect Called');
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{marginTop: 20, height: 50, width: '90%'}}
        placeholder={'Type here'}
        value={txt}
        onChangeText={text => setTxt(text)}
      />
      <Text style={{marginTop: 20}}>
        {`isKeyboardVisible: ${isKeyboardVisible}`}
      </Text>
    </View>
  );
};

export default UseEffectExampleOnlyOnce;
