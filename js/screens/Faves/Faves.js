import React from "react";
import {
  View,
  Text,
  SectionList,
  StatusBar,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "../Schedule/styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Faves = ({ faves, faveIds, navigation }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Session", { id: item.id });
            }}
            activeOpacity={0.5}
          >
            <View>
              <View style={styles.scheduleCntr}>
                <Text style={styles.scheduleTitle}>{item.title}</Text>
                <Text style={styles.scheduleLocation}>{item.location}</Text>
                <Icon
                  name={Platform.select({
                    ios: "ios-heart",
                    android: "md-heart"
                  })}
                  size={20}
                  color="#cf392a"
                  style={styles.heart}
                />
              </View>
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
        sections={faves}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Faves;

Faves.propTypes = {
  faves: PropTypes.array,
  navigation: PropTypes.object
};
