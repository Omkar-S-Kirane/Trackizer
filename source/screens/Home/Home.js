import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Styles from './Styles';

import bg from '../../../source/assets/images/Home/bg.png';
import logo from '../../../source/assets/icon/logo.png';
import styles from './Styles';

const Home = () => {
  return (
    <SafeAreaView style={Styles.root}>
      <View style={Styles.container}>
        <View styles={Styles.logo}>
          <Image source={logo} />
        </View>
        
        <View styles={[Styles.backGround]}>
          <Image source={bg} />
        </View>

        <View>
          <View style={Styles.textView}>
            <Text style={Styles.txt}>
              Congue malesuada in ac justo, a tristique leo massa.
            </Text>
            <Text style={Styles.txt}>Arcu leo leo urna risus.</Text>
          </View>
          <View style={Styles.button}>
            <TouchableOpacity style={Styles.btn1} onPress={{}}>
              <Text style={Styles.txt}>Get started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.btn2} onPress={{}}>
              <Text style={Styles.txt}>I have an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
