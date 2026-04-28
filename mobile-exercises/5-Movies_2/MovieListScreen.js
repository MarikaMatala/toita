import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import MovieDetailScreen from './MovieDetailScreen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

function MoviesList(props) {

  const [movies, setMovies] = useState([]); 
 
  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key=26eb649409084b73e4ebe5cb3d57bdde&append_to_response=videos')
      .then(response => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
  }, [])

  if (movies.length === 0) {
    return(
      <View style={{flex: 1, padding: 20}}>
        <Text>Loading, please wait...</Text>
      </View>
    )
  }
  let movieItems = movies.map(function(movie,index){
    return (
      <TouchableHighlight onPress={_ => itemPressed(index)} underlayColor="lightgray" key={index}>
        <MovieListItem movie={movie} key={index}/>
      </TouchableHighlight>
    )
  });

  const itemPressed = (index) => {
  props.navigation.navigate(
    'MovieDetails',
    { movie: movies[index]});
  }

  return (
    <ScrollView>
      {movieItems}
    </ScrollView>
  )
  
}

function MovieListItem(props) {
  let IMAGEPATH = 'http://image.tmdb.org/t/p/w500'
  let imageurl = IMAGEPATH + props.movie.poster_path;

  return (
    <View style={styles.movieItem}>
      <View style={styles.movieItemImage}>
        <Image source={{uri: imageurl}} style={{width: 99, height: 146}} />
      </View>
      <View style={{marginRight: 50}}>
        <Text style={styles.movieItemTitle}>{props.movie.title}</Text>
        <Text style={styles.movieItemText}>{props.movie.release_date}</Text>
        <Text numberOfLines={6} ellipsizeMode="tail" style={styles.movieItemText}>{props.movie.overview}</Text>
      </View> 
    </View>
  )
}

const MovieListScreen: () => Node = ({ navigation }) => {


  return (
    <SafeAreaView>
    <StatusBar/>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      <MoviesList navigation={ navigation }/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movieItem: {
    margin: 5,
    flex: 1,
    flexDirection: 'row'
  },
  movieItemImage: {
    marginRight: 5
  },
  movieItemTitle: {
    fontWeight: 'bold',
  },
  movieItemText: {
    flexWrap: 'wrap'
  }
});

export default MovieListScreen;
