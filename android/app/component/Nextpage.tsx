import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Nextpage = (props) => {
    const {email,password}=props.route.params;



  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20}}>Username</Text>
     
     
      <Text style={{fontSize:20,borderWidth:1,borderRadius:10,height:45,paddingHorizontal:10}}>{email}</Text>
      <Text style={{fontSize:20,marginTop:20}}>password</Text>
      
      <Text style={{fontSize:20,borderWidth:1,borderRadius:10,height:45,paddingHorizontal:30,}}>{password}</Text>
    </View>
  )
}

export default Nextpage ;

const styles = StyleSheet.create({})