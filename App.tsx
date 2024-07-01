import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Home } from './src/pages/Home';
import {theme} from './src/theme'
import {useFonts, Inter_300Light, Inter_400Regular, Inter_600SemiBold} from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoad] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold    
  })
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent/>
      { !fontsLoad ? 
       <Loading />
       : <Home /> 
     }      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  }
});