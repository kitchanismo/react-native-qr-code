import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from '@ui-kitten/components';
import QRCode from 'react-native-qrcode-svg';

import BackHeader from '../common/back-header';

export default ({route}) => {
  const item = route.params;

  const header = () => (
    <React.Fragment>
      <QRCode value={item.code} size={350}></QRCode>
      <Text style={styles.headerText} category="h4">
        {item.name.toUpperCase()}
      </Text>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <BackHeader title="Information Details" navigate="Passers" />
      <Card style={{marginTop: 30}} header={header}>
        <Text category="s1">{`Code: ${item.code}`}</Text>
        <Text category="s1">{`Address: ${item.address}`}</Text>
        <Text category="s1">{`Passed Date: ${
          item.onPassed
            ? new Date(item.onPassed.toDate()).toLocaleDateString()
            : ''
        }`}</Text>
      </Card>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  headerImage: {
    flex: 1,
    height: 192,
  },
});
