import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View,
  TouchableHighlight, Text, Image, Button} from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }
  
  