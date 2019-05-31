import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View,
  TouchableHighlight, Text, Image, Button} from 'react-native';

export default class Profile extends React.Component {
    static navigationOptions = {
      title: 'salam',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Text>

                Im in profile salam
            </Text>
        </View>
      );
    }
  }
  
  