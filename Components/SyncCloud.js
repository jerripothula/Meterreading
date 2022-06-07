import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button, Pressable, Alert} from 'react-native';
import {db} from '../Firebase/firebase_config';

import {collection, doc, setDoc, addDoc} from 'firebase/firestore/lite';

export default function SynCloud(props) {
  const syncCloudHandler = async () => {
    await setDoc(doc(db, 'machines', props.name), {
      Machine_Name: props.name,
      Machine_Reading: props.reading,
      Image_Count: props.count,
    });
  };
  return (
    <Pressable style={styles.button} onPress={syncCloudHandler}>
      <Text style={styles.buttext}>Sync To Cloud</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 5,
    width: 90,
  },
});
