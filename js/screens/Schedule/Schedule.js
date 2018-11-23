import React from "react";
import {
  View,
  Text,
  SectionList,
  StatusBar,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

const Schedule = ({ sessions, navigation }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate("Session", { key: item.id });
            }}
          >
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
            <Icon
              name={Platform.select({
                ios: "ios-heart",
                android: "md-heart"
              })}
              size={20}
              color="#cf392a"
            />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.titleCntr}>
            <Text> {moment(section.title).format("LT")}</Text>
          </View>
        )}
        sections={sessions}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default withNavigation(Schedule);
