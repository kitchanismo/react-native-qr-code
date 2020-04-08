import React, {useState, useEffect, useContext} from 'react';

import Logo from '../../assets/logo.svg';
import Wavy from '../../assets/wavy.svg';

import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Button, Input, Text, Icon} from '@ui-kitten/components';
import {AuthContext} from '../../context';

const SignUp = props => {
  const [user, setUser] = useState({email: '', password: ''});
  const {signUp} = useContext(AuthContext);

  const handleSignUp = async () => {
    try {
      await signUp(user);
      props.navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo></Logo>
      </View>
      <View style={styles.btns}>
        <Text category="s1" style={styles.text}>
          EMAIL
        </Text>
        <Input
          style={styles.input}
          size="medium"
          onChangeText={text => setUser({...user, email: text})}
          value={user.email}
        />
        <Text category="s1" style={styles.text}>
          PASSWORD
        </Text>
        <Input
          style={styles.input}
          size="medium"
          onChangeText={text => setUser({...user, password: text})}
          value={user.password}
          secureTextEntry={true}
        />
        <View style={styles.btn}>
          <Button size="large" status="danger" onPress={handleSignUp}>
            SIGN UP
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
    marginTop: 25,
    width: Dimensions.get('window').width,
  },
  btns: {flex: 1, width: 250, marginTop: 20},
  btn: {marginBottom: 15},
  title: {flex: 1, marginBottom: 20},
  input: {marginVertical: 10},
  text: {
    textAlign: 'left',
  },
});

export default SignUp;
