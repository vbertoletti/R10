import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Platform
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

const Speaker = ({ data, navigation }) => {
  //react native linking docs, basic usage
  //canOpenURL(url) -> Determine whether or not an installed app can handle a given URL, returns promise.
  linkExternal = () => {
    Linking.canOpenURL(data.Speaker.url)
      .then(url => {
        if (url) {
          Linking.openURL(data.Speaker.url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };

  return (
    <View style={styles.speakerCntr}>
      <View style={styles.speakerTitleCntr}>
        <Icon
          name={Platform.select({
            ios: "ios-close",
            android: "md-close"
          })}
          style={styles.icon}
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>About the Speaker</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.speakerInfo}>
          <Image
            style={styles.speakerImage}
            source={{ uri: data.Speaker.image }}
          />
          <Text style={styles.speakerName}>{data.Speaker.name}</Text>
          <Text style={styles.speakerBio}>{data.Speaker.bio}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => linkExternal()}
          >
            <LinearGradient
              style={{ borderRadius: 40, marginBottom: 40 }}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              colors={["#7B4EC1", "#9C9FCE"]}
            >
              <Text style={styles.readmore}> Read More on Wikipedia </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  data: PropTypes.object,
  navigation: PropTypes.object
};

export default Speaker;
