/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';

import BottomTabs from '../../components/BottomTabs';
// import CircularProgress from 'react-native-circular-progress-indicator';
// import SemiCircleProgressBar from 'react-progressbar-semicircle';

import youtube from '../../assets/icon/youtube.png'
import HBO from '../../assets/icon/HBO.png'
import OneDrive from '../../assets/icon/OneDrive.png'
import Mastercard from '../../assets/icon/Mastercard.png'
import Spotify from '../../assets/icon/Spotify.png'
import Netflix from '../../assets/icon/Netflix.png'
import logo from '../../assets/icon/logo.png'
import settings from '../../assets/icon/Settings.png'

const YourSubs = () => {

  const data = [
    {
      title: 'Spotify',
      // img: 'Spotify',
      img: 'Spotify',
      amt: '$5.99',
    },
    {
      title: 'YouTube Premium',
      img: 'youtube',
      amt: '$18.99',
    },
    {
      title: 'Microsoft OneDrive',
      img: 'OneDrive',
      amt: '$29.99',
    },
    {
      title: 'HBO',
      img: 'HBO',
      amt: '$9.99',
    },
    {
      title: 'Netflix',
      img: 'Netflix',
      amt: '$39.99',
    },
    {
      title: 'Mastercard',
      img: 'Mastercard',
      amt: '$89.99',
    },
  ];
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        {/* <BottomTabs /> */}
        <View style={styles.container}>
          <Image source={settings} style={styles.setting} />
          <View style={styles.circle}>
            <View style={styles.circle1}>
              <View style={styles.innerCircle}>
                <Image source={logo} style={styles.logo} />

                <View style={styles.box}>
                  <TouchableOpacity style={styles.budget}>
                    <Text style={[styles.touchableText, {color: 'white'}]}>
                      See your budget
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* <SemiCircleProgressBar percentage={33} showPercentValue /> */}
          </View>
          <View style={styles.bt}>
            <TouchableOpacity style={styles.touchable} activeOpacity={1}>
              <View
                style={[
                  styles.line,
                  {backgroundColor: '#FFA699', borderColor: '#FFA699'},
                ]}
              />
              <View style={styles.tt}>
                <Text style={styles.touchableText}>Active subs</Text>
                <Text
                  style={[
                    styles.touchableText,
                    {color: '#FFFFFF', marginTop: 5},
                  ]}>
                  12
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} activeOpacity={1}>
              <View
                style={[
                  styles.line,
                  {backgroundColor: '#AD7BFF', borderColor: '#AD7BFF'},
                ]}
              />
              <View style={styles.tt}>
                <Text style={styles.touchableText}>Highest subs</Text>
                <Text
                  style={[
                    styles.touchableText,
                    {color: '#FFFFFF', marginTop: 5},
                  ]}>
                  $19.99
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} activeOpacity={1}>
              <View
                style={[
                  styles.line,
                  {backgroundColor: '#7DFFEE', borderColor: '#7DFFEE'},
                ]}
              />
              <View style={styles.tt}>
                <Text style={styles.touchableText}>Lowest subs</Text>
                <Text
                  style={[
                    styles.touchableText,
                    {color: '#FFFFFF', marginTop: 5},
                  ]}>
                  $5.99
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btContainer}>
          <View style={styles.button}>
            <TouchableOpacity
              style={[
                styles.touchableOpacity,
                {backgroundColor: 'rgba(78, 78, 97, 0.2)'},
              ]}>
              <Text style={[styles.touchableText, {color: '#FFFFFF'}]}>
                Your subscriptions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity}>
              <Text style={[styles.touchableText, {color: '#A2A2B5'}]}>
                Upcoming bills
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {data.map(item => (
          <View style={styles.data}>
            <View style={styles.tabs}>
              <View style={styles.left}>
                <Image source={OneDrive} style={styles.ico} />
                <Text
                  style={[
                    styles.touchableText,
                    {color: '#FFFFFF', fontSize: 14},
                  ]}>
                  {item.title}
                </Text>
              </View>
              <View style={styles.right}>
                <Text
                  style={[
                    styles.touchableText,
                    {color: '#FFFFFF', fontSize: 14},
                  ]}>
                  {item.amt}
                </Text>
              </View>
            </View>
          </View>
        ))}
        {/* <View style={styles.data}>
          <View style={styles.tabs}>
            <View style={styles.left}>
              <Image source={Spotify} style={styles.ico} />
              <Text
                style={[
                  styles.touchableText,
                  {color: '#FFFFFF', fontSize: 14},
                ]}>
                Spotify
              </Text>
            </View>
            <View style={styles.right}>
              <Text
                style={[
                  styles.touchableText,
                  {color: '#FFFFFF', fontSize: 14},
                ]}>
                Spotify
              </Text>
            </View>
          </View>
        </View> */}
        {/* <View style={styles.button} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourSubs;
