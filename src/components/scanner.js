import React, {useState, useContext, useEffect} from 'react';
import {Icon, Text} from '@ui-kitten/components';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import {PasserContext} from '../context';

const ScanScreen = props => {
  const {onCheck} = useContext(PasserContext);
  const [scanner, setScanner] = useState(null);

  const [backHome, setBackHome] = useState(false);

  const onSuccess = ({data}) => {
    console.log('scanned');

    if (onCheck(data)) return props.navigation.replace('Valid', data);

    props.navigation.replace('Invalid');
  };

  const toHome = () => {
    setBackHome(true);
    props.navigation.replace('Home');
  };

  useEffect(() => {
    if (scanner) {
      scanner.reactivate();
    }
  }, []);

  return (
    <QRCodeScanner
      title="QR SCAN"
      containerStyle={styles.cameraContainer}
      topViewStyle={styles.zeroContainer}
      bottomViewStyle={styles.buttonTouchable}
      ref={node => {
        setScanner(node);
      }}
      showMarker
      onRead={onSuccess}
      topContent={
        <Text category="h4" style={{color: 'white'}}>
          Scanning...
        </Text>
      }
      bottomContent={
        <TouchableOpacity onPress={toHome} style={styles.buttonTouchable}>
          <Icon
            style={{
              width: 50,
              height: 50,
              color: 'rgb(255, 61, 113)',
            }}
            name="stop"
          />
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },

  cameraContainer: {
    backgroundColor: '#000',
  },
});

export default ScanScreen;
