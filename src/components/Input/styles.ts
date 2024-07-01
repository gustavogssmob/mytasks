import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",   
    marginTop: -30,
  },
  btn: {
    backgroundColor: theme.colors.secondColor,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 2,    
  },
  input: {
    width: "80%",
    padding: 11,
    backgroundColor: theme.colors.inputColor,
    color: theme.colors.backgroundColor,
    fontSize: 20,
    fontWeight: "300",
    borderRadius: 10,
    marginRight: 2
  },
  inputBorder:{
    borderColor: theme.colors.secondColor
  }
});

