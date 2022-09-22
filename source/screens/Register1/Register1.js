import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react'
import styles from './Styles'

import logo from '../../../source/assets/icon/logo.png';
import apple from '../../../source/assets/icon/apple.png';
import google from '../../../source/assets/icon/google.png';
import facebook from '../../../source/assets/icon/facebook.png';


const Register1 = (props) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#000000'}]}>
            <View style={styles.insideButtonView}>
              <Image source={apple} style={styles.ico} />
              <Text style={styles.txt}>Sign up with Apple</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#FFFFFF'}]}>
            <View style={styles.insideButtonView}>
              <Image source={google} style={styles.ico} />
              <Text style={[styles.txt, {color: '#000000'}]}>
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#1771E6'}]}>
            <View style={styles.insideButtonView}>
              <Image source={facebook} style={styles.ico} />
              <Text style={[styles.txt, {color: '#000000'}]}>
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.orView}>
            <Text style={styles.or}>or</Text>
          </View>

          <View style={styles.lastButton}>
            <TouchableOpacity
              style={[
                styles.btn,
                {backgroundColor: 'rgba(255, 255, 255, 0.1);'},
              ]}
              onPress={() => props.navigation.navigate('Register2')}>
              <Text style={[styles.txt, {color: '#FFFFFF'}]}>
                Sign up with E-mail
              </Text>
            </TouchableOpacity>
            <Text style={[styles.txt, {color: '#666680'}]}>
              By registering, you agree to our Terms of Use. Learn
            </Text>
            <Text style={[styles.txt, {color: '#666680'}]}>
              how we collect, use and share your data.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register1