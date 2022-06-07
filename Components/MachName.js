import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setMachName} from '../Redux/actions';

export default function MachName() {
  const {name} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  //const [name, onChangeName] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Machine Name </Text>
      <TextInput
        style={styles.input}
        keyboardType="default"
        value={name}
        onChangeText={value => dispatch(setMachName(value))}
        placeholder="Machine Name"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'yellow',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    //padding: 10,
    margin: 10,
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
