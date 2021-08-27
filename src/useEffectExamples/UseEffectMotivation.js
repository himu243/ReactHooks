import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

class UseEffectMotivation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.props.navigation.setOptions({
      title: `${this.state.count}`,
    });
  }
  componentDidUpdate() {
    this.props.navigation.setOptions({
      title: `${this.state.count}`,
    });
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.setState({count: this.state.count + 1})}>
        <Text>{'Update NavTitle'}</Text>
      </TouchableOpacity>
    );
  }
}

export default UseEffectMotivation;
