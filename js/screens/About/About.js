import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import SharedStyles from "../../config/styles";
import CodeConducts from "../../components/CodeConducts/CodeConducts";

const About = ({ data }) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.logoCntr}>
          <Image
            source={require("../../assets/images/r10_logo.png")}
            style={styles.logo}
          />
        </View>

        <Text style={[styles.aboutText, SharedStyles.projectFont]}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={[styles.aboutHeadings, SharedStyles.projectFont]}>
          Date & Venue
        </Text>
        <Text style={[styles.aboutText, SharedStyles.projectFont]}>
          The R10 conference will take place on Tuesday, June 27th, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={[styles.aboutHeadings, SharedStyles.projectFont]}>
          Code of Conduct
        </Text>

        {data.allConducts.map((conduct, index) => (
          <CodeConducts data={conduct} key={index} />
        ))}

        <View style={[styles.aboutFooter, SharedStyles.projectFont]}>
          <Text>© RED Academy 2017</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

About.propTypes = {
  object: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};
