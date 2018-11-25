import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 245,
    height: 60,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 30
  },

  logoCntr: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6"
  },

  aboutHeadings: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 15
  },

  aboutText: {
    lineHeight: 20,
    margin: 5,
  },

  aboutFooter: {
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
    paddingTop: 20,
    margin: 10
  },
  conductText: {
    color: "#9963ea",
    fontSize: 15,
    marginTop: 20
  },
  conductDescription: {
    overflow: "hidden",
    textAlign: "justify",
    margin: 10
  }
});

export default styles;
