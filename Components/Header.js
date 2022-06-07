import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Header() {
  return (
    <View style={styles.container} >
      <Text style={styles.heading}> Meter Reading
       Inspections </Text>
    </View>
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
    heading: {
        color: 'black', 
        fontWeight: 'bold',
        fontSize: 25
    }
})