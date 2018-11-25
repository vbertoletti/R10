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

const Session = ({ data }) => {
  return (
    <View>
      <ScrollView>
        <Text>{data.Session.location}</Text>
        <Icon
          name={Platform.select({
            ios: "ios-heart",
            android: "md-heart"
          })}
          size={20}
          color="#cf392a"
        />
        <Text>{data.Session.title}</Text>
        <Text>{moment(data.Session.startTime).format("LT")}</Text>

        <Text>{data.Session.description}</Text>
        <Text>Presented by:</Text>

        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: data.Session.speaker.image }}
          />
          <Text>{data.Session.speaker.name}</Text>
        </View>

        <TouchableOpacity />
      </ScrollView>
    </View>
  );
};

export default Session;
