import React, {useState} from 'react';

import {PasserContext} from './context';
import {usePassers} from './services/passers';

const PasserProvider = props => {
  const state = usePassers();

  return (
    <PasserContext.Provider value={state}>
      {props.children}
    </PasserContext.Provider>
  );
};

export default PasserProvider;
