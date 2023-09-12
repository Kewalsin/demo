import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let valide = true;
    const newError = {email: '', password: ''};
    if (!email) {
      newError.email = 'Email is required';

      valide = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = 'Invalid email format';
      valide = false;
    }

    if (!password) {
      newError.password = 'Password is required';
      valide = false;
    }

    setError(newError);
    return valide;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      console.log('Login successful');
      props.navigation.navigate("nextpage",{
        email:email,
        password:password
      })
      try {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
      } catch (error) {
        console.error('Error storing data: ', error);
      }
    }
    setEmail('');
    setPassword('');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}>
        <Image
          style={{height: 80, width: 80, borderRadius: 40, marginBottom: 40}}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
        <Text style={{fontSize: 20, color: 'white'}}>Username</Text>

        <TextInput
          placeholderTextColor={'white'}
          placeholder="Enter email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={{
            color: 'white',
            height: 50,
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
            paddingHorizontal: 20,
          }}
        />

        {error.email ? (
          <Text style={{fontSize: 15, color: 'red', marginTop: 10}}>
            {error.email}
          </Text>
        ) : null}

        <Text
          style={{
            fontSize: 20,
            marginTop: 25,
            fontWeight: '600',
            color: 'white',
          }}>
          Password
        </Text>
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor={'white'}
          value={password}
          onChangeText={text => setPassword(text)}
          style={{
            color: 'white',
            height: 50,
            width: '80%',
            borderBottomWidth: 1,
            borderRadius: 10,
            borderColor: 'white',
            paddingHorizontal: 20,
          }}
        />

        {error.password ? (
          <Text style={{fontSize: 15, color: 'red', marginTop: 10}}>
            {error.password}
          </Text>
        ) : null}

        <TouchableOpacity
          onPress={handleLogin}
          style={{
            height: 45,
            borderWidth: 1,
            width: '60%',
            borderRadius: 10,
            backgroundColor: '#424242',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>Log In</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
