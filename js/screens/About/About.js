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

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      height: new Animated.Value(0)
    };
  }

  startAnimation() {
    Animated.timing(this.state.height, {
      toValue: this.state.isShown ? 0 : 200,
      duration: 50,
      easing: Easing.elastic(0.6)
    }).start();
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

          {this.props.data.allConducts.map(conduct => (
            <View key={conduct.id}>
              <TouchableOpacity onPress={() => this.toggleDescription()}>
                {this.state.isShown ? (
                  <Text> - {conduct.title}</Text>
                ) : (
                  <Text> + {conduct.title}</Text>
                )}
              </TouchableOpacity>

              {this.state.isShown && (
                <Animated.View style={{ height: this.state.height }}>
                  <Text>{conduct.description}</Text>
                </Animated.View>
              )}
            </View>
          ))}

          <View style={styles.aboutFooter}>
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
