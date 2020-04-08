import React, {useContext} from 'react';
import {PasserContext} from '../../context';

import {
  List,
  ListItem,
  Button,
  Icon,
  TopNavigationAction,
} from '@ui-kitten/components';

import QRCode from 'react-native-qrcode-svg';
import BackHeader from '../common/back-header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Alert} from 'react-native';

const Passers = props => {
  const {passers, onDelete} = useContext(PasserContext);

  const qrIcon = code => <QRCode size={50} value={code}></QRCode>;

  const handleDelete = id => {
    Alert.alert(
      'Quarantine Pass',
      `Delete ${id}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            try {
              onDelete(id);
              alert('Deleted');
            } catch (error) {
              alert('Error');
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  const renderItemAccessory = (style, item) => (
    <React.Fragment>
      <TouchableOpacity onPress={() => props.navigation.push('Edit', item)}>
        <Icon
          style={{
            width: 40,
            height: 40,
            color: 'orange',
          }}
          name="edit"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft: 10}}
        onPress={handleDelete.bind(this, item.id)}>
        <Icon
          style={{
            width: 40,
            height: 40,
            color: 'rgb(255, 61, 113)',
          }}
          name="delete"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginLeft: 10}}
        onPress={() => props.navigation.push('Details', item)}>
        <Icon
          style={{
            width: 40,
            height: 40,
            color: 'rgb(0, 149, 255)',
          }}
          name="info-outline"
        />
      </TouchableOpacity>
    </React.Fragment>
  );

  const renderItem = ({item, index}) => (
    <ListItem
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'transparent',
      }}
      icon={() => qrIcon(item.code)}
      title={`${item.name.toUpperCase()}`}
      description={`Code: ${item.code}`}
      accessory={style => renderItemAccessory(style, item)}
    />
  );
  const AddIcon = style => (
    <Icon
      style={{color: 'rgb(0, 224, 150)', height: 30, padding: 0}}
      name="add"
    />
  );

  const AddAction = () => (
    <TopNavigationAction
      onPress={() => props.navigation.push('Generator')}
      icon={AddIcon}
    />
  );
  return (
    <React.Fragment>
      <BackHeader
        rightControls={AddAction()}
        title="Passer List"
        navigate="Home"
      />
      <List data={passers} renderItem={renderItem} />
    </React.Fragment>
  );
};

export default Passers;
