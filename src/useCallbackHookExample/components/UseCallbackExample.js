import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import Count from './Count';
import Button from './Button';
import Title from './Title';

const UseCallbackExample = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  // const incrementSalary = () => {
  //   setSalary(salary + 1000);
  // };
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge} title={'Increment Age'} />
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary} title={'Increment Salary'} />
    </View>
  );
};

export default UseCallbackExample;
