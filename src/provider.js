import React, {useState} from 'react';

import {PasserContext} from './context';

const PasserProvider = props => {
  const [items, setItems] = useState([]);

  const handleAdd = item => {
    if (hasItem(item.id)) {
      alert('Duplicate!');
      return false;
    } else {
      setItems([...items, item]);
      return true;
    }
  };

  const handleDelete = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const hasItem = id => items.filter(item => item.id === id).length > 0;

  const handleCheck = id => {
    return hasItem(id);
  };
  return (
    <PasserContext.Provider
      value={{
        items,
        onCheck: handleCheck,
        onAdd: handleAdd,
        onDelete: handleDelete,
      }}>
      {props.children}
    </PasserContext.Provider>
  );
};

export default PasserProvider;
