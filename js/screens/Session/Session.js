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
import PropTypes from "prop-types";
import SharedStyles from "../../config/styles";

const Session = ({ data, faveIds, methods, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={[styles.sessionLocation, SharedStyles.projectFont]}>
          {data.location}
        </Text>
        {faveIds.includes(data.id) ? (
          <Text />
        ) : (
          <Icon
            name={Platform.select({
              ios: "ios-heart",
              android: "md-heart"
            })}
            size={20}
            color="#cf392a"
            style={styles.heart}
          />
        )}
        <Text style={[styles.title, SharedStyles.projectFont]}>
          {data.title}
        </Text>
        <Text style={styles.time}>{moment(data.startTime).format("LT")}</Text>
        <Text style={[styles.description, SharedStyles.projectFont]}>
          {data.description}
        </Text>
        <Text>Presented by:</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SpeakerModal", { id: data.speaker.id });
          }}
        >
          {data.speaker ? (
            <View style={styles.speaker}>
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: data.speaker.image }}
                style={styles.speakerImage}
              />
              <Text style={[styles.speakerName, SharedStyles.projectFont]}>
                {data.speaker.name}
              </Text>
            </View>
          ) : (
            <View style={styles.speaker}>
              <Text style={[styles.speakerName, SharedStyles.projectFont]}>
                You! Go network 🤝{" "}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <View>
          <LinearGradient
            colors={["#9963ea", "#8797D6"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={styles.linearGradient}
          >
            {faveIds.includes(data.id) ? (
              <TouchableOpacity
                onPress={() => {
                  methods.deleteFave(data.id);
                }}
              >
                <Text style={styles.sessionButton}>Remove From Faves</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  methods.createFave(data.id);
                }}
              >
                <Text style={styles.sessionButton}>Add To Faves</Text>
              </TouchableOpacity>
            )}
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default Session;

Session.propTypes = {
  data: PropTypes.object,
  faveIds: PropTypes.array,
  methods: PropTypes.object,
  navigation: PropTypes.object
};
