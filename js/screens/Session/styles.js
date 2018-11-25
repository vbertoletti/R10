import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sessionLocation: {
    color: "#999999",
    fontSize: 16
  },

  container: {
    flex: 1,
    padding: 15
  },

  heart: {
    position: "absolute",
    right: 2
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15
  },
  time: {
    paddingTop: 5,
    paddingBottom: 15,
    color: "#cf392a"
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 20
  },

  sessionButton: {
    paddingVertical: 20,
    color: "#ffffff",
    fontSize: 16
  },
  linearGradient: {
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    alignItems: "center"
  },
  speaker: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: "#C5C6C5",
    borderBottomWidth: 1,
    marginBottom: 15
  },
  speakerImage: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 10
  },
  speakerName: {
    alignSelf: "center"
  }
});

export default styles;
