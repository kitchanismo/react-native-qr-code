import React, {useState} from 'react';

import {AuthContext} from '../context';
import useAuth from '../services/useAuth';

const AuthProvider = props => {
  const state = useAuth();

  return (
    <AuthContext.Provider value={state}>
      {props.children(state)}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
