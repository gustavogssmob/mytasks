import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: theme.colors.primaryColor,
    borderWidth: 1,
  },
  listIcon: {
    marginBottom: 50,
  },
  textBold: {
    fontSize: 14,
    fontFamily: theme.font_family.bold,
    color: theme.colors.textColorDark,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textRegular: {
    fontFamily: theme.font_family.regular,
  },
});
