import React from 'react';
import {StyleSheet, TextInput, View, Text, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setMachRead} from '../Redux/actions';

export default function MachRead() {
  const {reading} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const onChangeValue = value => {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      dispatch(setMachRead(value));
    } else {
      Alert.alert('No decimals or special characters is allowed.');
    }
  };
  //const [reading, onChangeReading] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Machine Reading </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={reading}
        onChangeText={value => onChangeValue(value)}
        placeholder="Machine Reading"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'pink',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    //padding: 10,
    margin: 5,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    margin: 10,
    borderWidth: 2,
    width: 200,
    padding: 10,
    borderColor: '#555',
    borderRadius: 5,
  },
});
