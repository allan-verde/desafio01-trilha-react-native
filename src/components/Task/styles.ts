import { StyleSheet } from "react-native";
import { theme } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray500,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "flex-start",
    marginBottom: 10,
    borderRadius: 8
  },
  text: {
    color: theme.colors.gray100,
    flex: 1,
    flexWrap: "wrap",
  },
  textLineThrough: {
    color: theme.colors.gray300,
    flex: 1,
    flexWrap: "wrap",
    textDecorationLine: "line-through",
  },
  button: {}
});
