import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import SharedStyles from "../../config/styles";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      height: new Animated.Value(0),
      opacity: new Animated.Value(0)
    };
  }

  startAnimation() {
    Animated.parallel([
      Animated.timing(this.state.height, {
        toValue: this.state.isShown ? 0 : 200,
        duration: 50,
        easing: Easing.elastic(0.9)
      }),

      Animated.timing(this.state.opacity, {
        toValue: this.state.isShown ? 0 : 200,
        duration: 700,
        easing: Easing.elastic(0.9)
      })
    ]).start();
  }

  toggleDescription() {
    this.startAnimation();
    this.setState({
      isShown: !this.state.isShown
    });
  }

  render() {
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

          {this.props.data.allConducts.map(conduct => (
            <View key={conduct.id}>
              <TouchableOpacity onPress={() => this.toggleDescription()}>
                {this.state.isShown ? (
                  <Text style={styles.conductText}> - {conduct.title}</Text>
                ) : (
                  <Text style={styles.conductText}> + {conduct.title}</Text>
                )}
              </TouchableOpacity>

              {this.state.isShown && (
                <Animated.View
                  style={{
                    height: this.state.height,
                    opacity: this.state.opacity
                  }}
                >
                  <Text style={styles.conductDescription}>
                    {conduct.description}
                  </Text>
                </Animated.View>
              )}
            </View>
          ))}

          <View style={[styles.aboutFooter, SharedStyles.projectFont]}>
            <Text>© RED Academy 2017</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default About;

About.propTypes = {
  object: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};
