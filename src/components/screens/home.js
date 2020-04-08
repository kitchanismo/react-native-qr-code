import React, {useState, useEffect, useContext} from 'react';

import Logo from '../../assets/logo.svg';
import Wavy from '../../assets/wavy.svg';

import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Button, useTheme, Layout, Text} from '@ui-kitten/components';

import {AuthContext} from '../../context';

const HomeScreen = props => {
  const {user, signOut} = useContext(AuthContext);
  const handleSignOut = async () => {
    try {
      await signOut();
      //props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

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

      <Text style={{marginTop: 20}}>{user ? user.email : ''}</Text>
      <Text onPress={handleSignOut} style={{marginTop: 10}} status="danger">
        SIGN OUT
      </Text>
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
  btns: {flex: 1, width: 250, marginTop: 0},
  btn: {marginBottom: 20},
  title: {flex: 1, marginBottom: 20},
  text: {textAlign: 'center'},
});

export default HomeScreen;
