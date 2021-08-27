import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ClassCounter, // 1a
  HookCounter, // 1b
  HookCounter2, // 2
  UseStateWithObject, // 3
  UseStateWithArray, //4
} from './src/useStateExamples';
import {
  UseEffectMotivation,
  UseEffectExampleAfterEveryRender,
  UseEffectExampleRunConditionally,
  UseEffectExampleOnlyOnce,
} from './src/useEffectExamples';
import {UseCallbackExample} from './src/useCallbackHookExample';
import {UseMemoHookExample} from './src/useMemoHookExample';
import {UseRefHookExample} from './src/useRefHook';
const Stack = createNativeStackNavigator();

/* Stack Screens  */
/* Use State */
const UseStateWithArrayComp = () => (
  <Stack.Screen name="UseStateWithArray" component={UseStateWithArray} />
);
const UseStateWithObjectComp = () => (
  <Stack.Screen name="UseStateWithObject" component={UseStateWithObject} />
);
/* Use Effect */
const UseEffectMotivationComp = () => (
  <Stack.Screen name="UseEffectMotivation" component={UseEffectMotivation} />
);
const UseEffectExampleAfterEveryRenderComp = () => (
  <Stack.Screen
    name="UseEffectExampleAfterEveryRender"
    component={UseEffectExampleAfterEveryRender}
  />
);
const UseEffectExampleRunConditionallyComp = () => (
  <Stack.Screen
    name="UseEffectExampleRunConditionally"
    component={UseEffectExampleRunConditionally}
  />
);
const UseEffectExampleOnlyOnceComp = () => (
  <Stack.Screen
    name="UseEffectExampleOnlyOnce"
    component={UseEffectExampleOnlyOnce}
  />
);
/* Use Callback */
const UseCallbackExampleComp = () => (
  <Stack.Screen name="UseCallbackExample" component={UseCallbackExample} />
);
/* Use Memo */
/* Use Callback */
const UseMemoExampleComp = () => (
  <Stack.Screen name="UseMemoExample" component={UseMemoHookExample} />
);
/* UseRef Hook */
const UseRefExampleComp = () => (
  <Stack.Screen name="UseRefExample" component={UseRefHookExample} />
);
/* App Component */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {UseRefExampleComp()}
        {/* {UseMemoExampleComp()} */}
        {/* {UseCallbackExampleComp()} */}
        {/* {UseEffectExampleOnlyOnceComp()} */}
        {/* {UseCallbackExampleComp()} */}
        {/* {UseEffectExampleRunConditionallyComp()} */}
        {/* {UseEffectExampleAfterEveryRenderComp()} */}
        {/* {UseEffectMotivationComp()} */}
        {/* {UseStateWithArrayComp()} */}
        {/* {UseStateWithObjectComp()} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
