import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const MovieListScreen: () => Node = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MovieList navigation={ navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key=9cbfc414f0da7e6e664d6e548741e44e&append_to_response=videos')
      .then(response => {
        setMovies(response.data.results);
      })
  }, []);

  const itemPressed = (index) => {
      props.navigation.navigate('MovieDetails',
        { movie: movies[index]});
  }

  if(movies.length === 0) {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text>Loading, please wait...</Text>
      </View>
    );
  }

  let movieItems = movies.map((movie, index) => {
    return (
        <TouchableHighlight onPress={_ => itemPressed(index)} 
                  underlayColor="lightgray" key={index}>
            <MovieListItem movie={movie} key={index}/>
        </TouchableHighlight>
    );
  })

  return (
    <ScrollView>
      {movieItems}
    </ScrollView>
  );
};

const MovieListItem = (props) => {
  let imgUrl = 'http://image.tmdb.org/t/p/w500' + props.movie.poster_path;
  return (
    <View style={styles.movieItem}>
      <View style={styles.movieItemImage}>
        <Image source={{uri: imgUrl}} style={{width: 99, height: 146}} />
      </View>
      <View style={{marginRight: 50}}>
        <Text style={styles.movieItemTitle}>{props.movie.title}</Text>
        <Text style={styles.movieItemText}>{props.movie.release_date}</Text>
        <Text numberOfLines={6} ellipsizeMode="tail" style={styles.movieItemText}>{props.movie.overview}</Text>
      </View> 
    </View>
  )
}

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
