import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from '../../components/header';
import { Calendar } from '../../components/calendar';

export function Home() {
  return (
    <View>
      <StatusBar
        hidden = {false}
        backgroundColor = "#736CED"
        translucent = {false}
      />
      <Header />
      <Calendar/>
    </View>
  );
}
