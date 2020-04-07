import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BackHeader from './common/back-header';
import {Text} from '@ui-kitten/components';

const Result = ({route}) => {
  return (
    <React.Fragment>
      <BackHeader title="Information Details" navigate="Home" />
      <View style={styles.container}>
        <Text status="danger" category="h2">
          NOT FOUND!
        </Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Result;
