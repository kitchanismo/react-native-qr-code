import React, {useState, useEffect, useContext} from 'react';

import Logo from '../../assets/logo.svg';
import Wavy from '../../assets/wavy.svg';

import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Button, Input, Text, Icon} from '@ui-kitten/components';
import {AuthContext} from '../../context';

const SignIn = props => {
  const [user, setUser] = useState({email: '', password: ''});
  const {signIn} = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      await signIn(user);
      props.navigation.navigate('Home');
    } catch (error) {
      alert('Invalid email or password!');
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
          <Button size="large" status="danger" onPress={handleSignIn}>
            SIGN IN
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

export default SignIn;
