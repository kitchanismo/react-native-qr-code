import React, {useContext} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Card, Text, Button} from '@ui-kitten/components';
import QRCode from 'react-native-qrcode-svg';
import {PasserContext} from '../../context';
import BackHeader from '../common/back-header';

export default ({route, navigation}) => {
  const {onAdd} = useContext(PasserContext);
  const item = route.params;

  const header = () => (
    <React.Fragment>
      <QRCode value={item.code} size={350}></QRCode>
      <Text style={styles.headerText} category="h4">
        {item.name.toUpperCase()}
      </Text>
    </React.Fragment>
  );

  const handleAdd = async () => {
    try {
      await onAdd(item);
      alert('Added');
      navigation.push('Passers');
    } catch (error) {
      alert('Error');
    }
  };

  const footer = () => (
    <View style={styles.footerContainer}>
      <Button
        status="danger"
        onPress={handleAdd}
        style={styles.footerControl}
        size="medium">
        SAVE
      </Button>
    </View>
  );
  return (
    <React.Fragment>
      <BackHeader title="Preview" navigate="Generator" />
      <ScrollView contentContainerStyle={{marginTop: 30}}>
        <Card header={header} footer={footer}>
          <Text category="s1">{`Code: ${item.code}`}</Text>
          <Text category="s1">{`Address: ${item.address}`}</Text>
        </Card>
      </ScrollView>
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
