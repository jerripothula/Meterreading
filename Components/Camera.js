import React from 'react';
import {StyleSheet, View, Text, Button, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CameraScreen from '../Screens/CameraScreen';
import {useNavigation} from '@react-navigation/native';

export default function Camera({navigation}) {
  navigation = useNavigation();
  return (
    //<View style={styles.container}>
    <FontAwesome5
      name="camera"
      onPress={() => navigation.navigate(CameraScreen)}
      size={50}
    />
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    justifyContent: 'space-evenly',
    height: 80,
  },
});
