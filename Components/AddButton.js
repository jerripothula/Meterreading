import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  Button,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  setMachName,
  setMachRead,
  setCount,
  setGalleryCount,
  setMachObj,
  reSetCount,
} from '../Redux/actions';

export default function AddButton() {
  const {name, reading, count, gcount, machObj} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();
  let cou = count + gcount;

  const onPressAddHandler = () => {
    if (name === '' || reading === '') {
      Alert.alert('Fields cannot be empty');
    } else {
      dispatch(setMachObj({name, reading, cou}));
      Alert.alert('Added to list.');
      console.log(machObj);
      dispatch(setMachName(''));
      dispatch(setMachRead(''));
      dispatch(reSetCount());
      dispatch(setGalleryCount(0));
    }
  };
  return (
    <Pressable style={styles.button} onPress={() => onPressAddHandler()}>
      <Text style={styles.buttext}>Add</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 6,
    height: 60,
    marginRight: 10,
    marginTop: 5,
    marginLeft: 260,
  },
  buttext: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
