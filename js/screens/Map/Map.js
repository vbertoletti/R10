import React from "react";
import { View, Image, Dimensions } from "react-native";

class Map extends React.Component {
  render() {
    return (
      <View>
        {/* 
        source= https://stackoverflow.com/questions/33804500/screen-width-in-react-native */}
        <Image
          source={require("../../assets/images/map.png")}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
        />
      </View>
    );
  }
}

export default Map;
