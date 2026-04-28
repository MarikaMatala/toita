
import React from 'react';

import {
  StyleSheet,
  View, 
  Button } from 'react-native';

import {
  AdMobBanner,
  setTestDeviceIDAsync,
  AdMobInterstitial,
  AdMobRewarded,
} from 'expo-ads-admob';

setTestDeviceIDAsync('EMULATOR');

export default class App extends React.Component {

  showInterstitial = async () => {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  }

  showRewarded = async() => {
    await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button title="Show interstitial" onPress={this.showInterstitial} />
        <Button title="Show rewarded" onPress={this.showRewarded}/>
        <View style={styles.banner}>
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            onDidFailToReceiveAdWithError={(e) => console.log(e)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    position: 'absolute',
    bottom: 0
  }
});
