import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

const MovieDetailScreen = ({ route, navigation }) => {

    const [detail, setDetail] = useState({});
    const [videos, setVideos] = useState([]);
    const { movie } = route.params;
    let imageUrl = 'http://image.tmdb.org/t/p/w500' + movie.backdrop_path;

    useEffect(() => {
      axios
        .get('https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=9cbfc414f0da7e6e664d6e548741e44e&append_to_response=videos')
        .then(response => {
          setDetail(response.data);
          setVideos(response.data.videos.results);
        })
    }, []);

    return (
        <View>
          <Image source={{uri: imageUrl}} style={styles.image}  />
          <View>
            <Text style={styles.text}>Title: {detail.title}</Text>
            <Text style={styles.text}>{detail.overview}</Text>
            <Text style={styles.text}>Homepage: {detail.homepage}</Text>
          </View>
          <View>
          <Text style={styles.text}>Videos:</Text>
            {
              videos.map((video, index) => {
                return (
                  <Text
                    style={styles.linktext} 
                    key={index}
                    onPress={() => {
                      navigation.navigate('YoutubePlayer', {
                        youtubeKey: video.key
                      });
                    }}>{video.name}</Text>
                )
              })
            }  
          </View>      
        </View>
    );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 670/250,
    marginBottom: 10
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 17
  },

  text: {
    fontSize: 12,
    marginBottom: 5,
    flexWrap: 'wrap'
  },

  linktext: {
    fontSize: 10,
    color: 'blue',
    flexWrap: 'wrap'
  },
});

export default MovieDetailScreen;