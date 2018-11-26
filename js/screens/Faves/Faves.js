import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  SectionList,
  StatusBar,
  TouchableHighlight
} from "react-native";
import styles from "../Schedule/styles";
import moment from "moment";

const Faves = ({ faves, faveIds, navigation }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Session", { id: item.id });
            }}
            underlayColor="#e6e6e6"
            activeOpacity={0.7}
          >
            <View>
              <View>
                <Text>{item.title}</Text>
                <Text>{item.location}</Text>
                {faveIds.find(item => item === item.id) && (
                  <Ionicons
                    name="ios-heart"
                    size={"horizontal" ? 20 : 25}
                    color="red"
                  />
                )}
              </View>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section }) => (
          <Text>{moment(section.title).format("LT")}</Text>
        )}
        sections={faves}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Faves;
