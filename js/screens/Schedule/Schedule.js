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

const Schedule = ({ data, navigation }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate("Session", { key: item.id });
            }}
          >
            <Text key={index}>{item}</Text>
            {/* <Text>{item.location}</Text> */}
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
        renderSectionHeader={() => (
          <View style={styles.titleCntr}>
            <Text> {moment().format("LT")}</Text>
          </View>
        )}
        sections={[
          { title: "Title1", data: ["item1", "item2"] },
          { title: "Title2", data: ["item3", "item4"] },
          { title: "Title3", data: ["item5", "item6"] }
        ]}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default withNavigation(Schedule);
