import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  TextInput,
  Linking
} from 'react-native';

const App: () => Node = () => {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const launchMap = () => {
    const location = `${latitude},${longitude}`
    const url = Platform.select({
      ios: `maps:${location}`,
      android: `geo:${location}?center=${location}&q=${location}&z=16`,
    });
    Linking.openURL(url);
  }

  return (
    <SafeAreaView>
      <View>
        <Button title="Launch a Map" onPress={launchMap}/>
        <TextInput  
          placeholder='Latitude' 
          onChangeText={text => setLatitude(text)}/>
        <TextInput 
          placeholder='Longitude' 
          onChangeText={text => setLongitude(text)}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
