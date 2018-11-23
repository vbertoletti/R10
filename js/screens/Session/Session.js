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
        <Text>location</Text>
        <Icon
          name={Platform.select({
            ios: "ios-heart",
            android: "md-heart"
          })}
          size={20}
          color="#cf392a"
        />
        <Text>session title</Text>
        <Text>{moment().format("LT")}</Text>
        <Text>session description</Text>
        <Text>Presented by:</Text>
        <Image />
        <Text>Speaker Name</Text>
        <TouchableOpacity />
      </ScrollView>
    </View>
  );
};

export default Session;
