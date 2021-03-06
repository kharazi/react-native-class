import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default class MyInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={ this.props.placeholder }
        keyboardType = { this.props.keyboardType }
        onChangeText={(text) => {
            this.props.onType(text, this.props.inputName)
          }
        }
      />
    );
  }
}
  
  
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'pink',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
});
