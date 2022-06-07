import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button, Pressable, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import RNFS, {mkdir, writeFile} from 'react-native-fs';

export default function ExportBut(props) {
  const {name, reading, count, gcount, machObj} = useSelector(
    state => state.userReducer,
  );

  const exportHandler = () => {
    var folderPath = RNFS.ExternalDirectoryPath + '/' + props.name;

    RNFS.mkdir(folderPath);
    console.log(folderPath);

    var filePath = folderPath + '/' + props.name + '.txt';
    console.log(filePath);
    var content =
      'Machine Name:' +
      props.name +
      ' \n ' +
      'Machine Reading:' +
      props.reading +
      '\n' +
      'Images:' +
      props.count;

    console.log(content);
    RNFS.writeFile(filePath, content, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
        Alert.alert('Exported successfully');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <Pressable style={styles.button} onPress={exportHandler}>
      <Text style={styles.buttext}>Export To Device</Text>
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
