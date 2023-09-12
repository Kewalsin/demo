import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './android/app/component/LogIn'
import Nextpage from './android/app/component/Nextpage'


const Stack=createNativeStackNavigator()

const App = () => {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LogIn} options={{headerShown:false}}/>
          <Stack.Screen name="nextpage" component={Nextpage}/>
        </Stack.Navigator>
      </NavigationContainer>
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({})