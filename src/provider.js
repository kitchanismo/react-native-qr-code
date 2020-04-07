import React, {useState} from 'react';

import {PasserContext} from './context';
import {usePassers} from './services/passers';

const PasserProvider = props => {
  const {passers, setPassers, onAdd, onDelete} = usePassers();

  // const handleDelete = code => {
  //   setPassers(passers.filter(item => item.code !== code));
  // };

  const hasItem = code => passers.filter(item => item.code === code).length > 0;

  const handleCheck = code => {
    return hasItem(code);
  };
  return (
    <PasserContext.Provider
      value={{
        items: passers,
        onCheck: handleCheck,
        onAdd,
        onDelete,
      }}>
      {props.children}
    </PasserContext.Provider>
  );
};

export default PasserProvider;
