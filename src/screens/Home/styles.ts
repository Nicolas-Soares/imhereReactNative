import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 24,
  },
  firstText: {
    color: "#FDFCFE",
    fontSize: 24,
    paddingTop: 15,
  },
  secondText: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#1F1E25",
    borderRadius: 8,
    height: 60,
    padding: 15,
    color: "#00FF9C",
    borderWidth: 0.5,
    marginRight: 10,
  },
  buttonText: {
    color: "#fa61f2",
    fontSize: 28,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#2c2b33",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
  },
  emptyListText: {
    color: "#00FF9C",
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
