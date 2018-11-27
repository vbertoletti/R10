import React from "react";
import { Text, View, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

class CodeConducts extends React.Component {
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
        toValue: 200,
        duration: 1000,
        easing: Easing.elastic(0.9)
      }),

      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(0.9)
      })
    ]).start();
  }

  openDescription() {
    this.startAnimation();
    this.setState({
      isShown: !this.state.isShown
    });
  }

  render() {
    return (
      <View>
        {this.state.isShown ? (
          <View>
            <TouchableOpacity onPress={() => this.openDescription()}>
              <Text style={styles.conductText}> - {conduct.title}</Text>
            </TouchableOpacity>
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
          </View>
        ) : (
          <TouchableOpacity onPress={() => this.openDescription()}>
            <Text style={styles.conductText}> + {conduct.title}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default CodeConducts;

// CodeConducts.propTypes = {
//   object: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string
//   })
// };
