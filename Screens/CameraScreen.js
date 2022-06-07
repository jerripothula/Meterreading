import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import {useSelector, useDispatch} from 'react-redux';
import {setCount} from '../Redux/actions';

export default function CameraScreen() {
  //const [count, setCount] = React.useState(1);
  const {count, name} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const [{cameraRef}, {takePicture}] = useCamera(null);

  const captureHandler = async () => {
    let x = count;
    try {
      const data = await takePicture();
      dispatch(setCount());
      console.log(data);
      console.log(data.uri);
      const filePath = data.uri;
      console.log(x);
      const newFilePath = RNFS.DownloadDirectoryPath + '/MyTest' + x++ + '.png';
      RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
          dispatch(setCount(x));
        })
        .catch(error => {
          console.log('Move', error);
        });
    } catch (error) {
      console.log('Capture', error);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        playSoundOnCapture={true}
        style={styles.preview}>
        <Button
          title="Capture"
          color="#1eb900"
          boolean="true"
          onPress={() => captureHandler()}
        />
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
