import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

export default function PlayMovie(props) {

    const { route } = props;
    const {moviesKey } = route.params;
    const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

  return (
    <View style={{ transform: [{ rotate: "90deg"}]}}>
      <View style={{backgroundColor: "black"}}>
      <YoutubePlayer
      height={SCREEN_WIDTH}
      width={678}
      play={true}
      videoId={moviesKey}
      />
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
  image: {
    aspectRatio: 670/250
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  },
  text: {
    fontSize: 12,
    flexWrap: 'wrap'
  }
});
