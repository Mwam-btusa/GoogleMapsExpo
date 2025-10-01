import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={ styles.mapa}
        initialRegion={{
        latitude: -23.55052,
        longitude: -46.633308,
        latitudeDelta: 0.0922,
        longitudeDelta:0.0421,
        }}
        >
        <marker
          coordinate={{latitude: -23.55052, longitude: -46.633308,}}
          title={"São Paulo"}
          description={"Capital financeira do Brasil"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },  
});
