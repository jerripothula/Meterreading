import React from 'react';
import {StyleSheet, View, Text, Button, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CameraScreen from '../Screens/CameraScreen';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';
import {setGalleryCount} from '../Redux/actions';

export default function Gallery() {
  const {gcount} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  //const [count, setCount] = React.useState(1);
  //navigation = useNavigation();
  let x = gcount;

  const openGallery = () => {
    let options = {
      saveToPhotos: true,
      selectionLimit: 0,
      storageOption: {
        path: 'Images',
        mediaType: 'photo',
      },
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      //console.log('Count = ', count);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        response.assets.map(asset => console.log(asset.uri));
        dispatch(setGalleryCount(response.assets.length + x));
        console.log(response.assets.length);
      }
    });
  };

  return (
    //<View style={styles.container}>
    <FontAwesome5 name="folder" onPress={() => openGallery()} size={50} />

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
