import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';

import logo from '../../../source/assets/icon/logo.png';
import box from '../../../source/assets/icon/box.png';
import boxFIll from '../../../source/assets/icon/boxFIll.png';
import Difficulty from '../../../source/assets/images/Register2/Difficulty.png';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Register2 = props => {
  const [check, setCheck] = useState(box);
  const validate = () => {
    if (check == box) {
      console.log('Switch to check2');
      return setCheck(boxFIll);
    } else {
      console.log('Switch to check1');
      return setCheck(box);
    }
  };
  const [inputs, setInputs] = useState({
    userId: '',
    password: '',
  });
  console.log("Inputs: ",inputs);
  const handleOnchange = (text, input) => {
    // Alert.alert('handleOnchange');
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const getDATA = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Key');
      value = JSON.parse(jsonValue);
      console.log('Value', value);
    } catch (e) {
      console.log('Error getting Data: ', e);
    }
    if (value.password == inputs.password && value.userName == inputs.userId) {
      alert('Login successful');
    } else {
      alert('Error! userId/Password mismatch');
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>

      <View style={styles.login}>
        <View style={styles.loginComponent}>
          <Text style={[styles.txt, {fontSize: 10}]}>Login</Text>
          <TextInput
            style={styles.input}
            label="userId"
            onChangeText={text => handleOnchange(text, 'userId')}></TextInput>
        </View>
        <View style={styles.loginComponent}>
          <Text style={[styles.txt, {fontSize: 10}]}>Password</Text>
          <TextInput
            style={styles.input}
            password
            label="password"
            onChangeText={text => handleOnchange(text, 'password')}></TextInput>
        </View>

        <View style={styles.checkBox}>
          <TouchableOpacity onPress={validate} style={styles.check}>
            <Image source={check} style={styles.box} />
            <Text style={[styles.txt, {fontSize: 12, marginHorizontal: 10}]}>
              Remember Me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.check, {marginLeft: 70}]}>
            <Text style={[styles.txt, {fontSize: 12, fontWeight: 'bold'}]}>
              Forgot passoword
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: '#FF7966'}]}
            onPress={getDATA}
            // activeOpacity={0.9}
          >
            <Text style={[styles.txt, {color: '#FFFFFF'}]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={[styles.txt, {color: '#FFFFFF', fontWeight: 'normal'}]}>
          If you don't have an account yet?
        </Text>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: 'rgba(255, 255, 255, 0.1)', marginBottom: 35},
          ]}
          // onPress={() => props.navigation.navigate('Register2')}>
          onPress={() => props.navigation.navigate('YourSubs')}>
          <Text style={[styles.txt, {color: '#FFFFFF'}]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register2;
