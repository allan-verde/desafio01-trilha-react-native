import { StyleSheet } from "react-native";
import { theme } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600
  },
  header: {
    width: "100%",
    height: 150,
    backgroundColor: theme.colors.gray700,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {},
  content: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    gap: 20
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: theme.colors.gray500,
    borderRadius: 5,
    color: theme.colors.gray100,
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {},
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -45
  },
  infoNumbers: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  infoItem: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  textInfoItemOne: {
    color: theme.colors.blue,
    fontWeight: "bold"
  },  
  textInfoItemTwo: {
    color: theme.colors.purple,
    fontWeight: "bold"
  },
  textInfoItemNumber: {
    backgroundColor: theme.colors.gray500,
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 8,
    color: theme.colors.gray100,
  },
  empty: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray500,
    alignItems: "center",
    padding: 30
  },
  emptyImage: {
    marginBottom: 20
  },
  emptyText: {
    color: theme.colors.gray300,
  },
  emptyTextBold: {
    color: theme.colors.gray300,
    fontWeight: "bold"
  }
});
