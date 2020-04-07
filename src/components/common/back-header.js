import React from 'react';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
const BackHeader = props => {
  const navigation = useNavigation();

  const BackIcon = style => <Icon {...style} name="arrow-back" />;

  const BackAction = () => (
    <TopNavigationAction
      onPress={() => navigation.push(props.navigate)}
      icon={BackIcon}
    />
  );

  return <TopNavigation {...props} leftControl={BackAction()} />;
};

export default BackHeader;
