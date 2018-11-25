import React from "react";
import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";

const Session = ({ data, navigation, context }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sessionLocation}>{data.Session.location}</Text>
        <Icon
          name={Platform.select({
            ios: "ios-heart",
            android: "md-heart"
          })}
          size={20}
          color="#cf392a"
          style={styles.heart}
        />
        <Text style={styles.title}>{data.Session.title}</Text>
        <Text style={styles.time}>
          {moment(data.Session.startTime).format("LT")}
        </Text>

        <Text style={styles.description}>{data.Session.description}</Text>
        <Text>Presented by:</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SpeakerModal", {
              key: data.Session.speaker.id
            });
          }}
        >
          <View style={styles.speaker}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: data.Session.speaker.image }}
              style={styles.speakerImage}
            />
            <Text style={styles.speakerName}>{data.Session.speaker.name}</Text>
          </View>
        </TouchableOpacity>

        <View>
          <LinearGradient
            colors={["#9963ea", "#8797D6"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={styles.linearGradient}
          >
            <TouchableOpacity>
              <Text style={styles.sessionButton}>Add To Faves</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default Session;
