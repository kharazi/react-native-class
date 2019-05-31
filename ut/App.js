
import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View,
  TouchableHighlight, Text, Image, KeyboardAvoidingView} from 'react-native';
import { blue } from 'ansi-colors';
import MyInput from './MyInput';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

export default class App extends Component<Props> {

  constructor (props) {
    super(props)
    this.state = {
      password: '',
      email: '',
      pressed: false
    }
    this.getInputText = this.getInputText.bind(this)
  }

  onChangePassword (password) {
    this.setState({password})
  }

  onPressLearnMore () {
    console.log('Yay!! Im here')
    this.setState({ pressed: true }) 
  }

  getInputText (text, inputName) {
    this.setState({text})
  }

  render() {
    return (
      <Provider store={store}>
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <View style={styles.section}>
            <Image 
              style={{width: 50, height: 50}}
              source={require('./src/telegram.png')}
            />
            <Text>
              Text is: {this.state.text}
            </Text>
          </View>
          <View style={styles.section}>
            <MyInput
              placeholder='email'
              keyboardType='email-address'
              inputName='email'
              onType={this.getInputText}
            />
            <MyInput
              inputName='password'
              placeholder='password'
              onType={this.getInputText}
            />
            <MyInput
              inputName='password'
              placeholder='password'
              onType={this.getInputText}
            />
            <MyInput
              inputName='password'
              placeholder='password'
              onType={this.getInputText}
            />
            <TouchableHighlight style={styles.signin}
              underlayColor = 'transparent'
              onPress={() => this.setState({pressed: !this.state.pressed})}>
              <View
                style={styles.button}>
                <Text style={styles.text}>
                  Sign In
                </Text>
              </View>
            </TouchableHighlight>

            {this.state.pressed === true && 
              <Text>pressed</Text>
            }
          </View>
          <View style={styles.section}>
            <TouchableHighlight style={styles.signin}
              underlayColor = 'transparent'
              onPress={() => this.setState({pressed: !this.state.pressed})}>
              <View
                style={styles.button}>
                <Text style={styles.text}>
                  Sign up
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </Provider>
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
  signin: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff'
  },
  section: {
    flex: 1,
    paddingHorizontal: '10%'
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20
  },
  red: {
    color: 'red',
  },
});
