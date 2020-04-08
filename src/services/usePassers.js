import firestore from '@react-native-firebase/firestore';
import React, {useState, useEffect} from 'react';

export default function usePassers() {
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

  const onAdd = async item => {
    await ref.add(item);
  };

  const onDelete = async id => {
    await ref.doc(id).delete();
  };

  const onUpdate = async (id, item) => {
    await ref.doc(id).update(item);
  };

  const onCheck = code => passers.filter(item => item.code === code).length > 0;

  return {passers, onAdd, onDelete, onUpdate, onCheck, onPassed: onUpdate};
}
