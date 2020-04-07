import firestore from '@react-native-firebase/firestore';
import React, {useState, useEffect} from 'react';

export function usePassers() {
  const ref = firestore().collection('passers');
  const [passers, setPassers] = useState([]);

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setPassers(list);
    });
  }, []);

  const onAdd = item => {
    ref
      .add(item)
      .then(() => alert('Successfully saved!'))
      .catch(error => alert('Error saving: ', error));
  };

  const onDelete = id => {
    ref
      .doc(id)
      .delete()
      .then(() => alert('Successfully deleted!'))
      .catch(error => alert('Error deleting: ', error));
  };
  return {passers, onAdd, setPassers, onDelete};
}
