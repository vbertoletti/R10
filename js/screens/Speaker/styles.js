import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  speakerCntr: {
    flex: 1,
    backgroundColor: "black"
  },

  speakerTitleCntr: {
    flexDirection: "row",
    paddingTop: 60,
    color: "white"
  },
  icon: {
    marginLeft: 15
  },
  title: {
    color: "white",
    fontSize: 20,
    paddingLeft: 20
  },

  speakerInfo: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,

    marginBottom: 40
  },
  speakerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginVertical: 20
  },
  speakerName: {
    fontSize: 35,
    paddingVertical: 20,
    alignSelf: "center"
  },
  speakerBio: {
    fontSize: 15,
    margin: 20
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 15,
    alignSelf: "center"
  },
  readmore: {
    fontSize: 15,
    color: "white",
    alignSelf: "center",
    padding: 20,
    borderRadius: 15
  }
});

export default styles;
