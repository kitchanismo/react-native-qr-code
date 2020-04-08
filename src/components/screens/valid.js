import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Button} from '@ui-kitten/components';
import QRCode from 'react-native-qrcode-svg';

import BackHeader from '../common/back-header';
import {PasserContext} from '../../context';

export default ({route, navigation}) => {
  const {passers, onPassed} = useContext(PasserContext);
  const code = route.params;

  const getItem = passers.filter(item => item.code === code)[0];

  const handlePassed = () => {
    onPassed(getItem.id, {onPassed: new Date(Date.now())});
    navigation.navigate('Home');
  };

  const header = () => (
    <React.Fragment>
      <QRCode value={code} size={350}></QRCode>
      <Text style={styles.headerText} category="h4">
        {code}
      </Text>
    </React.Fragment>
  );

  const footer = () => (
    <View style={styles.footerContainer}>
      <Button
        status="danger"
        onPress={handlePassed}
        style={styles.footerControl}
        size="medium">
        PASSED
      </Button>
    </View>
  );

  return (
    <React.Fragment>
      <BackHeader title="Information Details" navigate="Home" />

      <Card style={{marginTop: 30}} header={header} footer={footer}>
        <Text category="h6">{`Name: ${getItem ? getItem.name : ''}`}</Text>
        <Text category="h6">{`Address: ${
          getItem ? getItem.address : ''
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
    height: 100,
  },
});
