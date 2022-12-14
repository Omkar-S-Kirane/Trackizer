import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';

import logo from '../../../source/assets/icon/logo.png';
import Difficulty from '../../../source/assets/images/Register2/Difficulty.png';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Register2 = props => {
  const [inputs, setInputs] = useState({
    userName: '',
    password: '',
  });
  console.log('InputsR: ', inputs);
  const handleOnchange = (text, input) => {
    // Alert.alert('handleOnchange');
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const setDATA = async () => {
    try {
      const jsonValue = JSON.stringify(inputs);
      // console.log('jsonValue', jsonValue);
      const temp = await AsyncStorage.setItem('@Key', jsonValue);
      console.log('temp', JSON.parse(jsonValue));
      const value = JSON.parse(jsonValue);
      if (
        value.password == inputs.password &&
        value.userName == inputs.userName
      ) {
        alert('User already exists! Please Login.');
      }
    } catch (e) {
      console.log('Error getting Data: ', e);
    }

    // getDATA();
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>

      <View style={styles.login}>
        <View style={styles.loginComponent}>
          <Text style={[styles.txt, {fontSize: 10}]}>E-mail address</Text>
          <TextInput
            style={styles.input}
            label="userName"
            onChangeText={text => handleOnchange(text, 'userName')}></TextInput>
        </View>
        <View style={styles.loginComponent}>
          <Text style={[styles.txt, {fontSize: 10}]}>Password</Text>
          <TextInput
            style={styles.input}
            password
            label="password"
            onChangeText={text => handleOnchange(text, 'password')}></TextInput>
        </View>
        <View style={styles.line}>
          <Image source={Difficulty} style={styles.diff} />
          <Text style={[styles.txt1, {marginTop: 10}]}>
            Use 8 or more characters with a mix of letters,
          </Text>
          <Text style={styles.txt1}>numbers & symbols.</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: '#FF7966', marginTop: 20}]}
            onPress={async () => {
              setDATA();
              const jsn = await AsyncStorage.getItem('@Key');
              value = JSON.parse(jsn);
              if (
                value.password == inputs.password &&
                value.userName == inputs.userName
              ) {
                alert('User already exists! Please Login.');
              } else {
                props.navigation.navigate('login');
              }
            }}
            // activeOpacity={0.9}
          >
            <Text style={[styles.txt, {color: '#FFFFFF'}]}>
              Get started, it???s free!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={[styles.txt, {color: '#FFFFFF', fontWeight: 'normal'}]}>
          Do you have already an account?
        </Text>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: 'rgba(255, 255, 255, 0.1)', marginBottom: 35},
          ]}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={[styles.txt, {color: '#FFFFFF'}]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register2;
