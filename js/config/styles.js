import { StyleSheet, Platform } from "react-native";

const SharedStyles = StyleSheet.create({
  projectFont: {
    fontFamily: Platform.select({
      ios: "Montserrat",
      android: "Montserrat-Regular"
    })
  }
});

export default SharedStyles;
