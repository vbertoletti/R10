import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Platform } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

const Session = ({ data }) => {
  return (
    <View>
      <ScrollView>
        <Icon
          name={Platform.select({
            ios: "ios-close",
            android: "md-close"
          })}
          size={20}
          color="#cf392a"
        />
        <Image />
        <Text>Speaker Name</Text>
        <Text>Speaker bio</Text>
        <TouchableOpacity>
          <Text> Read More on Wikipedia</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Session;
