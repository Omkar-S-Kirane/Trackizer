import {View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Styles from './Styles';

import bg from '../../../source/assets/images/Home/bg.png';
import bgNew from '../../../source/assets/images/Home/bgNew.png';
import logo from '../../../source/assets/icon/logo.png';
// import Styles from './Styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = (props) => {
  return (
    <SafeAreaView style={Styles.root}>
      <View style={Styles.container}>
        {/* <View style={{backgroundColor: 'red'}}>
          <Text>Heyyy</Text>
        </View> */}
        <View styles={Styles.logo}>
          <Image source={logo} />
        </View>

        <View styles={[Styles.backGround]}>
          {/* <Text style={Styles.txt}>Hey</Text> */}
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
            <TouchableOpacity
              style={[Styles.btn, {backgroundColor: '#FF7966'}]}
              onPress={() => props.navigation.navigate('Register1')}>
              <Text style={Styles.txt}>Get started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.btn,
                {backgroundColor: 'rgba(255, 255, 255, 0.1)'},
              ]}
              onPress={
                (onPress = () => props.navigation.navigate('Login'))
              }>
              <Text style={Styles.txt}>I have an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
