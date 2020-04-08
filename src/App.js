import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PasserProvider from './provider';
import Scanner from './components/screens/scanner';
import Home from './components/screens/home';

import Generator from './components/screens/generator';
import Invalid from './components/screens/invalid';

import {MaterialIconsPack} from './material-icons';
import withLayout from './withLayout';
import Passers from './components/screens/passers';
import Preview from './components/screens/preview';
import Details from './components/screens/details';
import Valid from './components/screens/valid';
import Edit from './components/screens/edit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <IconRegistry icons={MaterialIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <PasserProvider>
            <Stack.Navigator headerMode="none" initialRouteName="Home">
              <Stack.Screen name="Home" component={withLayout(Home)} />
              <Stack.Screen name="Scanner" component={Scanner} />
              <Stack.Screen
                name="Generator"
                component={withLayout(Generator)}
              />
              <Stack.Screen name="Invalid" component={withLayout(Invalid)} />
              <Stack.Screen name="Passers" component={Passers} />
              <Stack.Screen name="Preview" component={withLayout(Preview)} />
              <Stack.Screen name="Details" component={withLayout(Details)} />
              <Stack.Screen name="Valid" component={withLayout(Valid)} />
              <Stack.Screen name="Edit" component={withLayout(Edit)} />
            </Stack.Navigator>
          </PasserProvider>
        </ApplicationProvider>
      </NavigationContainer>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default App;
