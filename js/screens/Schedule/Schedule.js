import React from "react";
import { View, Text, SectionList, StatusBar } from "react-native";
import styles from "./styles";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { withNavigation } from "react-navigation";

const Schedule = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SectionList
        renderItem={({ item, index, section }) => (
          <Text
            key={index}
            onPress={() => this.props.navigation.navigate("Session")}
          >
            {item}
          </Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.titleCntr}>
            <Text style={styles.title}>{title}</Text>
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
