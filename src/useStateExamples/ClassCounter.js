import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.incrementCount}>
          <Text>{`Count: ${this.state.count}`}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default ClassCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
