import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Camera from './Camera';
import Gallery from './Gallery';
import {useSelector} from 'react-redux';
//import {useNavigation} from '@react-navigation/native';

export default function MachPhoto() {
  const {count, gcount} = useSelector(state => state.userReducer);
  //
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Machine Photos </Text>
      {<Text style={{fontWeight: 'bold', fontSize: 20}}>{count + gcount}</Text>}
      <Camera />
      <Gallery />
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
    padding: 10,
  },
  label: {
    //padding: 10,
    margin: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
