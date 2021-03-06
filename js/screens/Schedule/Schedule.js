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
import PropTypes from "prop-types";
import SharedStyles from "../../config/styles";

const Schedule = ({ data, navigation, context }) => {
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
            <View style={styles.scheduleCntr}>
              <Text style={[styles.scheduleTitle, SharedStyles.projectFont]}>
                {item.title}
              </Text>
              <Text style={[styles.scheduleLocation, SharedStyles.projectFont]}>
                {item.location}
              </Text>

              {context.faveIds.includes(item.id) ? (
                <Icon
                  name={Platform.select({
                    ios: "ios-heart",
                    android: "md-heart"
                  })}
                  size={20}
                  color="#cf392a"
                  style={styles.heart}
                />
              ) : (
                <Text />
              )}
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.titleCntr}>
            <Text style={styles.momentTime}>
              {moment(section.title).format("LT")}
            </Text>
          </View>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default withNavigation(Schedule);

Schedule.propTypes = {
  data: PropTypes.array,
  navigation: PropTypes.object,
  context: PropTypes.object
};
