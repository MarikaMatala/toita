import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieListScreen from './MovieListScreen';
import MovieDetailScreen from './MovieDetailScreen';
import YoutubePlayerScreen from './YoutubePlayerScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MoviesList"
          component={MovieListScreen}
          options={{ title: 'MovieList' }}
        />
        <Stack.Screen 
          name="MovieDetails"
          component={MovieDetailScreen}
          options={{ title: 'MovieDetails'}}
        />
        <Stack.Screen 
          name="YoutubePlayer"
          component={YoutubePlayerScreen}
          options={{ title: 'YoutubePlayer'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
