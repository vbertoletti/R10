import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";

class Map extends React.Component {
  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 49.2827,
            longitude: -123.1207,
            latitudeDelta: 1,
            longitudeDelta: 1
          }}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject
//   }
// });

export default Map;
