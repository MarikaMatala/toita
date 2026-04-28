import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const YoutubePlayerScreen = ({ route, navigation }) => {
    const [playing, setPlaying] = useState(false);
    const { youtubeKey } = route.params;

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false); 
            Alert.alert("video has finished playing!");
        }  
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);  
    }, []);

    return (
        <View>
            <YoutubePlayer 
                height={400}
                play={playing}
                videoId={youtubeKey}
                onChangeState={onStateChange}/>
        </View>
    )
}

export default YoutubePlayerScreen;