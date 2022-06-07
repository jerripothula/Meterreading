import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import AddButton from '../Components/AddButton';
import Header from '../Components/Header';
import ListEntry from '../Components/ListEntry';
import MachName from '../Components/MachName';
import MachPhoto from '../Components/MachPhoto';
import MachRead from '../Components/MachRead';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <Header />
      <MachName />
      <MachRead />
      <MachPhoto />
      <AddButton />
      <ListEntry />
    </ScrollView>
  );
}
