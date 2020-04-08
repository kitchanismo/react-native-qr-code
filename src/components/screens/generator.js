import React, {useState, useEffect} from 'react';

import {Button, Input, Text} from '@ui-kitten/components';
import {View, StyleSheet, ScrollView} from 'react-native';

import uid from 'shortid';
import BackHeader from '../common/back-header';

const Generator = ({navigation}) => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    setCode(uid.generate());
  }, []);

  const handlePreview = () => {
    if (name === '' || address === '') {
      return;
    }

    navigation.navigate('Preview', {code, name, address});
  };

  return (
    <React.Fragment>
      <BackHeader title="Generate New Passer" navigate="Home" />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.container}></View>
        <View style={styles.form}>
          <Text category="s1" style={styles.text}>
            CODE
          </Text>

          <Input
            style={styles.input}
            size="medium"
            onChangeText={text => setCode(text)}
            value={code}
          />
          <Text category="s1" style={styles.text}>
            FULLNAME
          </Text>
          <Input
            style={styles.input}
            size="medium"
            onChangeText={text => setName(text)}
            value={name}
          />
          <Text category="s1" style={styles.text}>
            ADDRESS
          </Text>
          <Input
            style={styles.input}
            size="medium"
            onChangeText={text => setAddress(text)}
            value={address}
          />

          <View style={styles.btns}>
            <View style={styles.btn}>
              <Button status="danger" size="medium" onPress={handlePreview}>
                PREVIEW
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.container}></View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    flex: 1,

    // paddingHorizontal: 5,
  },
  btns: {
    flexDirection: 'row',
  },
  input: {marginVertical: 10},
  text: {
    textAlign: 'left',
  },
  form: {
    flex: 8,
    marginTop: 30,
  },
});

export default Generator;
