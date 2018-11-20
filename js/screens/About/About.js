import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";

const About = () => {
  return (
    <View>
      <View style={styles.logoCntr}>
        <Image
          source={require("../../assets/images/r10_logo.png")}
          style={{ width: 50, height: 50 }}
          style={styles.logo}
        />
      </View>
      <ScrollView>
        <Text style={styles.aboutText}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.aboutHeadings}>Date & Venue</Text>
        <Text style={styles.aboutText}>
          The R10 conference will take place on Tuesday, June 27th, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.aboutHeadings}>Code of Conduct</Text>
        <View style={styles.aboutFooter}>
          <Text>© RED Academy 2017</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
