import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {removeListObj} from '../Redux/actions';
import ExportBut from './ExportBut';
import SynCloud from './SyncCloud';

export default function ListEntry() {
  const {machObj} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Text style={styles.text}>List of entries </Text>
      <>
        {machObj.map((mach, index) => (
          <View key={index} style={styles.container}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.innerMachName}> {mach.name}</Text>
                <Text style={styles.innerMachName}>{mach.reading}</Text>
              </View>
              <View style={{padding: 15}}>
                <FontAwesome5
                  name="trash"
                  // onPress={() => dispatch(removeListObj(index))}
                  size={30}
                />
              </View>
            </View>

            <View style={styles.innerImage}>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome5 name="camera" size={30} />
                <Text style={styles.innerCount}>{mach.cou}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  justifyContent: 'space-evenly',
                }}>
                <SynCloud
                  name={mach.name}
                  reading={mach.reading}
                  count={mach.cou}
                />
                <ExportBut
                  name={mach.name}
                  reading={mach.reading}
                  count={mach.cou}
                />
              </View>
            </View>
          </View>
        ))}
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cccccc',
    margin: 20,
    flexDirection: 'column',
    width: '90%',
    height: 150,
    borderColor: 'black',
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  innerMachName: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  innerImage: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  innerCount: {
    padding: 5,
    fontSize: 20,
    paddingLeft: 10,
    color: 'black',
  },
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
