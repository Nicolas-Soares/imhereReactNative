import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewContainter: {
    width: '100%',
    height: 60,
    backgroundColor: '#1F1E25',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    flex: 1
  },
  username: {
    color: '#00FF9C',
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
  },
  buttonText: {
    color: "#db5151",
    fontSize: 28,

  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#2c2b33",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  masterView: {
    flexDirection: "row",
    width: '100%',
    marginBottom: 10,
  }
})