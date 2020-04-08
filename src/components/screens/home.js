import React, {useState, useEffect} from 'react';

import Logo from '../../assets/logo.svg';
import Wavy from '../../assets/wavy.svg';

import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Button, useTheme, Layout, Text} from '@ui-kitten/components';

const HomeScreen = props => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo></Logo>
      </View>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <Button
            size="giant"
            status="danger"
            onPress={() => props.navigation.navigate('Scanner')}>
            SCAN
          </Button>
        </View>
        <View style={styles.btn}>
          <Button
            size="giant"
            status="danger"
            appearance="outline"
            onPress={() => props.navigation.navigate('Passers')}>
            PASSERS
          </Button>
        </View>
      </View>
      <View style={styles.town}>
        <Wavy style={{flex: 1, marginTop: 40}}></Wavy>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 50,
  },
  town: {
    flex: 1,
    paddingBottom: 0,
    width: Dimensions.get('window').width,
  },
  btns: {flex: 1, width: 250, marginTop: 50},
  btn: {marginBottom: 15},
  title: {flex: 1, marginBottom: 20},
  text: {textAlign: 'center'},
});

export default HomeScreen;
