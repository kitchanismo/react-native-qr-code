import React, {useState, useContext} from 'react';

import {Button, Input, Text} from '@ui-kitten/components';
import {View, StyleSheet, ScrollView} from 'react-native';

import BackHeader from './common/back-header';
import {PasserContext} from '../context';

const Edit = ({route, navigation}) => {
  const {onUpdate} = useContext(PasserContext);
  const item = route.params;

  const [data, setData] = useState(item);

  return (
    <React.Fragment>
      <BackHeader title="Edit Passer" navigate="Passers" />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.container}></View>
        <View style={styles.form}>
          <Text category="s1" style={styles.text}>
            CODE
          </Text>

          <Input
            style={styles.input}
            size="medium"
            onChangeText={text => setData({...data, code: text})}
            value={data.code}
          />
          <Text category="s1" style={styles.text}>
            FULLNAME
          </Text>
          <Input
            style={styles.input}
            size="medium"
            onChangeText={text => setData({...data, name: text})}
            value={data.name}
          />
          <Text category="s1" style={styles.text}>
            ADDRESS
          </Text>
          <Input
            style={styles.input}
            size="medium"
            onChangeText={text => setData({...data, address: text})}
            value={data.address}
          />

          <View style={styles.btns}>
            <View style={styles.btn}>
              <Button
                onPress={() => onUpdate(data.id, data)}
                status="danger"
                size="medium">
                UPDATE
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

export default Edit;
